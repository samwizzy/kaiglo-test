import {
  Component,
  ElementRef,
  Injector,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  Observable,
  Subject,
  delay,
  finalize,
  map,
  mergeAll,
  of,
  takeUntil,
  timer,
  zip,
} from 'rxjs';
import { Post } from 'src/app/utils/interfaces/Post';
import { TodoService } from 'src/app/utils/services/todo.service';
import { TempComponent } from '../temp/temp.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  @ViewChild('dropArea') dropArea!: ElementRef<HTMLDivElement>;

  postId = new Subject<number>();
  posts$: Observable<Post[]> = this.ts.getPosts();
  filterPosts$: Observable<Post[]> = this.posts$.pipe(
    map((posts) => {
      return posts.filter((post) => post.userId === 9);
    })
  );
  post$: Observable<Post> = this.postId.pipe(
    map((postId) => this.ts.getPostById(postId)),
    mergeAll()
  );
  

  constructor(
    private ts: TodoService,
    private viewContainerRef: ViewContainerRef,
    private injector: Injector
  ) {}

  ngOnInit(): void {
    const source = of(1, 2, 3).pipe(delay(2000));
    const source2 = of(4, 5, 6).pipe(delay(1000));
    const source3 = of(7, 8, 9).pipe(delay(500));

    zip(source, source2, source3)
      .pipe(finalize(() => console.log('I am done')))
      .subscribe((data) => {
        console.log(data);
      });

    const timer$ = timer(5000);
    const source4 = timer(2000, 1000);

    source4.pipe(takeUntil(timer$)).subscribe(console.log);
  }

  createComponent() {
    const compRef = this.viewContainerRef.createComponent(TempComponent, {
      injector: this.injector,
    });

    console.log(compRef.instance.show);
  }

  setPostId(id: number) {
    this.postId.next(id);
  }

  onFileChange(event: Event) {
    console.log(event.target);
  }

  onDragOver(event: Event) {
    event.preventDefault();

    this.dropArea.nativeElement.classList.add('dragged-over');
  }

  onDragLeave(event: Event) {
    this.dropArea.nativeElement.classList.remove('dragged-over');
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const file = event.dataTransfer?.files[0];

    this.getBase64(file).subscribe((data) => console.log(data));
  }

  getBase64(file: any) {
    const fileReader = new FileReader();

    return new Observable((observer) => {
      fileReader.onload = (event) => {
        observer.next(event.target?.result);
        observer.complete();
      };

      fileReader.readAsDataURL(file);
    });
  }
}
