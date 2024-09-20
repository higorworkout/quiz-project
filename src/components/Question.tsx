/* eslint-disable react/jsx-key */
import styles from '../styles/Question.module.css'
import QuestionModel from "@/model/question";
import Enunciado from './Enunciado';
import Resposta from './Resposta';
import Timer from './Timer';

const letras = [
  { valor: 'A', cor: '#F2C866' },
  { valor: 'B', cor: '#F266BA' },
  { valor: 'C', cor: '#85D4F2' },
  { valor: 'D', cor: '#BCE596' },
];

interface QuestionProps {
    value: QuestionModel,
    tempoPraResposta?: number,
    respostaFornecida: (index: number) => void,
    timeOut: () => void,
}

export default function Question(props: QuestionProps) {
    const question = props.value

    function renderResposta(){
        return question.respostas.map((resposta, i ) => {
            return <Resposta 
                key={`${question.id}-${i}`}
                valor={resposta}
                index={i}
                letra={letras[i].valor}
                corFundoLetra={letras[i].cor}
                respostaFornecida={props.respostaFornecida}
                />
        })
    }

    return (
        <div className={styles.question}>
            <Enunciado texto={question.enunciado} />
            <Timer key={question.id} duration={props.tempoPraResposta ?? 10} timeOut={props.timeOut}/> 
            {renderResposta()}
        </div>
    )
}