import { Conversation } from "../types/api";

export class GetConversationById {
    id: string;

    constructor(id:string){
        this.id = id;
    }

    get(): Promise<Conversation> {
        return  fetch(`${process.env.API_URL}/conversations/${this.id}`).
        then((res) => res.json())
    }
}