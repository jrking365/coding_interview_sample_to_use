export interface Message {
    id: number,
    createdAt:string,
    name:string,
    text:string
}

export interface Conversation {
    _id:string,
    createdAt:string,
    messages: Message[]
}