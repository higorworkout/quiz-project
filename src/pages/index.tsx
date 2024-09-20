import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Question from "@/components/Question";
import QuestionModel from "@/model/question";
import ResponseModel from "@/model/response";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";
import Quiz from "@/components/Quiz";
import { useRouter } from 'next/router';


const inter = Inter({ subsets: ["latin"] });

const questionMock = new QuestionModel(1, 'Melhor cor de todas?', [
   ResponseModel.wrong('Verde'),
   ResponseModel.wrong('Vermelha'),
   ResponseModel.wrong('Azul'),
   ResponseModel.right('Preta'),
]);

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const router = useRouter()

  const [ questionsIds, setIdsOfQuestion ] = useState<number[]>([])
  const [ question, setQuestion ] = useState<QuestionModel>(questionMock)
  const [ responseRight, setResponseRight ] = useState<number>(0)


  async function loadQuestionIds() {
     const resp = await fetch(BASE_URL + '/questionario')
     const questionsIds = await resp.json()
     console.log(questionsIds)
     setIdsOfQuestion(questionsIds)
  }

  async function loadQuestion(idQuestion: number) {
     const resp = await fetch(BASE_URL + '/questions/' + idQuestion);
     const json = await resp.json()
     const newQuestion = QuestionModel.createUsingObject(json);
     setQuestion(newQuestion)
   }

  useEffect(() => {
    loadQuestionIds()
  }, [])


  useEffect(() => {
    questionsIds.length > 0 && loadQuestion(questionsIds[0])
  }, [questionsIds])
  
  function questionResponded(questionResponded: QuestionModel) {
      setQuestion(questionResponded)
      const correct = questionResponded.acertou
      setResponseRight(responseRight + (correct ? 1 : 0))
  }

  function idNextQuestion() {
   
      const nextIndex = questionsIds.indexOf(question.id) + 1;
      return questionsIds[nextIndex]
    
  }

  function goToNextPass() {
    const nextId = idNextQuestion();
    nextId ? goToNextQuestion(nextId) : finalize()
  }

  function goToNextQuestion(nextId: number)  {
    loadQuestion(nextId)
  }

  function finalize()  {
    router.push({
      pathname: '/resultado',
      query: {
        total: questionsIds.length,
        certas: responseRight
      }
    })
  }


  return (
    <>
      <Head>
        <title>quiz</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <main style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh',
          }}>
            {
              question ? (
                <Quiz 
                   question={question}
                   ultima={idNextQuestion() === undefined}
                   questionResponsed={questionResponded}
                   goToNestPass={goToNextPass}
                />
              ) : false
            }
          </main>
    </>
  );
}
