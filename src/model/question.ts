import { shuffle } from '@/functions/arrays';
import RespostaModel from './response';

export default class QuestionModel {
    #id: number
    #enunciado: string
    #respostas: RespostaModel[]
    #acertou: boolean
  

    constructor(id: number, enunciado: string, respostas: any[], acertou = false) {
        this.#id = id;
        this.#enunciado = enunciado;
        this.#respostas = respostas;
        this.#acertou = acertou;
    }

    get id() {
        return this.#id;
    }

    get enunciado() {
        return this.#enunciado;
    }

    get respostas() {
        return this.#respostas;
    }

    get acertou() {
        return this.#acertou;
    }

    get noRespondida() {
        return !this.respondida
    }

    get respondida() {
        for(let resposta of this.#respostas) {
            if(resposta.revelada) return true
        }
        
        return false;
    }

    respondWith(indice: number): QuestionModel {
        const acertou = this.#respostas[indice]?.certa
        
        const responses = this.#respostas.map((resposta, i) => {
            const respostaSelected = indice === i
            const deveRevelar = respostaSelected || resposta.certa
            return deveRevelar ? resposta.revelar() : resposta
        })

        return new QuestionModel(this.id, this.enunciado, responses, acertou)
    }

    toShuffleResponses(): QuestionModel {
        let responsesShuffled = shuffle(this.#respostas)

        return new QuestionModel(this.#id, this.#enunciado, responsesShuffled, this.#acertou,)
    }

    static createUsingObject(obj: QuestionModel): QuestionModel {
        const respostas = obj.respostas.map(resp => RespostaModel.createUsingObject(resp))
        return new QuestionModel(obj.id, obj.enunciado, respostas, obj.acertou)
    }

    toObject() {
        return {
            id: this.#id,
            enunciado: this.#enunciado,
            respondida: this.respondida,
            acertou: this.#acertou,
            respostas: this.#respostas.map(resp => resp.toObject()),
        }
    }
}