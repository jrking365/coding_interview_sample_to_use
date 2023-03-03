import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { GetConversationHandler } from './src/handlers/get_conversations';
import { GetConversationByIdHandler } from './src/handlers/get_conversation_by_id';
import { PostMessageHandler } from './src/handlers/post_message';

dotenv.config();
const port = process.env.PORT
const app = express();

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.get('/', GetConversationHandler);
app.get('/conversation/:id',GetConversationByIdHandler);
app.post('/message/:id', PostMessageHandler);

app.listen(port, ()=>{
    console.log('listening');
})