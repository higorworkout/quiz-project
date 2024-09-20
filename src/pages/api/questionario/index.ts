import { shuffle } from '@/functions/arrays'
import { question } from '../QuestionBank'
import { NextApiRequest, NextApiResponse } from 'next'

export default function index (req: NextApiRequest, res: NextApiResponse) {
    const ids = question.map(question => question.id)

    res.status(200).json(shuffle(ids))
}