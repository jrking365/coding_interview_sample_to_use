import {Request, Response } from 'express';
import { PostMessage } from '../services/post_message';

export async function PostMessageHandler(req:Request, res:Response){

    const data = req.body;
    console.log(data);
    const conversation_id = req.params.id;
   const message = await new PostMessage(
    {
        ...data,
        conversation_id: conversation_id
    }
   ).post();

   console.log(message)

   res.redirect(`/conversation/${conversation_id}`);
}