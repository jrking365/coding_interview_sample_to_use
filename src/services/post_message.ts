import { Message } from "../types/api";

type CreateMessageParam = {
    name: string,
    message: string,
    conversation_id:string
}

export class PostMessage{

    name:string;
    message:string;
    conversation_id:string;

    constructor({name, message, conversation_id} :CreateMessageParam ){
        this.name = name;
        this.message = message;
        this.conversation_id = conversation_id;
    }

   async post():Promise<Message>{
    return  fetch(`${process.env.API_URL}/conversations/${this.conversation_id}/message`, {
       method: 'POST',
       headers: {
        "Content-Type": "application/json"
       },
       body: JSON.stringify({
        name: this.name,
        message: this.message
       })
        
    }).
    then((res) => res.json())
    .catch((error) => console.log(error))
   }
}