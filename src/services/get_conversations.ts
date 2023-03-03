import { Conversation } from "../types/api";

export class GetConversations{

   async get():Promise<Conversation[]>{
    return  fetch(`${process.env.API_URL}/conversations`).
    then((res) => res.json())
   }
}