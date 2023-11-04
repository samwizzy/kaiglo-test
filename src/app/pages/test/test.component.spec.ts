import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';

fdescribe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let router: Router;
  let location: Location;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to temp page', () => {
    let el = de.query(By.css('[data-testid="fw-btn"]')).nativeElement;
    let spy = spyOn(router, 'navigateByUrl');

    el.click(); // OR
    // component.goToTemp();

    let navArgs = spy.calls.first().args[0];

    expect(spy).toHaveBeenCalled();
    expect(navArgs).toMatch(/temp/i);
  });

  it('should be route test', () => {
    let el = de.query(By.css('[data-testid="fw-btn"]')).nativeElement;
    el.click();

    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('temp');
    });
  });

  it('should be equal in arrays', () => {
    const arr = [{ id: 1 }, { id: 2 }, { id: 3 }];
    expect(arr).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });

  it('should have text hello world', () => {
    const el = de.query(By.css('[data-testid="hello"]')).nativeElement;

    expect(el.textContent).toMatch(/hello world/i);
  });

  it('should show empty text when there are no checklists', () => {
    component.checkList = [];
    const el = de.query(By.css('[data-testid="empty-list"]')).nativeElement;
    expect(el.textContent).toEqual('No checklist');
  });

  it('should show list of checklists', () => {
    let list = [{}, {}, {}] as any;
    component.checkList = list;
    fixture.detectChanges();
    const el = de.queryAll(By.css('[data-testid="check-list"]'));
    expect(el.length).toEqual(list.length);
  });
});
