import styles from '../styles/Quiz.module.css';
import QuestionModel from "@/model/question";
import Question from './Question';
import Button from './Button';

    interface QuizProps {
    question: QuestionModel
    ultima: boolean
    questionResponsed: (question: QuestionModel) => void
    goToNestPass: () => void
}

const Quiz = (props: QuizProps) => {
  function respostaFornecida(indice: number) {
      if (props.question.noRespondida) {
        props.questionResponsed(props.question.respondWith(indice))
      }
  }

  return (
    <div className={styles.quiz}>
      {
        props.question ?

          <Question 
              value={props.question}
              tempoPraResposta={6}
              respostaFornecida={respostaFornecida}
              timeOut={props.goToNestPass}
            /> 
        : false
      }

          <Button onClick={props.goToNestPass} texto={props.ultima ? 'Finalizar' : 'Próxima'}/>
    </div>
  )
}

export default Quiz
