import { User } from "./user";

export interface ChatList{
    id: string;
    group:ChatGroup;
    roomId:string;
    recentMessage: string;
    initiator: User;
    groupChat: boolean;
    participants: User[];
    participantIds: string[];
    ownerId:string;
  }

  export interface MessageModel{
    message:{
      content: string;
      text: string;
      timeStamp?:any;
    };
    ownerId: string;
    roomId: string;
    groupTimeStamp: string;
  }
  
  export interface ChatGroup{
    id:string;
    groupName:string;
    groupDescription:string;
    user:User;
    groupChat:boolean;
  }