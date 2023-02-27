// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../firebase-admin';
import admin from 'firebase-admin'
import query from "../../lib/queryapi";

type Data = {
  error?: string
  response?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ error: 'Please provide a prompt' })
  }

  if (!chatId) {
    res.status(400).json({ error: 'Please provide a chatId' })
  }

  if (!model) {
    res.status(400).json({ error: 'Please provide a model' })
  }

  const openAIresponse = await query(prompt, chatId, model);

  const message = {
    text: openAIresponse || '--Chatbot is not able to respond your question',
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: 'Chatbot',
      name: 'Chatbot',
      avatar: 'https://ui-avatars.com/api/?name=Chatbot'
    }
  }

  // With firebase admin privileges, store the message in the firestore
  await db.collection('users').doc(session?.user?.email!).collection('chats').doc(chatId).collection('messages').add(message);

  res.status(200).json({ response: openAIresponse });
}
