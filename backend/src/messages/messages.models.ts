export interface Message {
    id: string;
    message: string;
    topicId: string;
    createdAt: Date;
}

export type Messages = Message[];

export interface MessageCreationRequest {
    message: string;
    topicId: string;
    creator: User;
}

// TODO : this should be a proper entity
export type User = string;
