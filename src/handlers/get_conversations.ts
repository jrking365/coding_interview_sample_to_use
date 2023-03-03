import {Request, Response } from 'express';
import { GetConversations } from '../services/get_conversations';

export async function GetConversationHandler(req:Request, res:Response){
    const conversations = await new GetConversations().get();

   res.render('index', {conversations});
}