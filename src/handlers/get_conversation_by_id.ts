import {Request, Response } from 'express';
import { GetConversationById } from '../services/get_conversation_by_id';

export async function GetConversationByIdHandler(req:Request, res:Response){
    const id = req.params.id;
    const conversation = await new GetConversationById(id).get();

   res.render('conversation', {conversation});
}