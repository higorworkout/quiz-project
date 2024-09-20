// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { question } from "../QuestionBank";


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const idSeletion = Number(req.query.id);

  const uniqueOrNada = question.filter((quest) =>  quest.id === idSeletion);
  console.log(uniqueOrNada[0]);
  if(uniqueOrNada.length === 1) {
    const questionSelected = uniqueOrNada[0].toShuffleResponses();
    const obj = questionSelected.respondWith(0).toObject()

    res.status(200).json(questionSelected.toObject())
  } else {
    res.status(204).send('');
  }
}
