export default class ResponseModel {
    #valor: string;
    #certa: boolean;
    #revelada: boolean;

    constructor(
        valor: string,
        certa: boolean,
        revelada = false,
    ) {
        this.#valor = valor;
        this.#certa = certa;
        this.#revelada = revelada;
    }

    static right(value: string) {
        return new ResponseModel(value, true)
    }

    static wrong(value: string) {
        return new ResponseModel(value, false)
    }

    get valor() {
        return this.#valor
    }

    get certa() {
        return this.#certa
    }

    get revelada() {
        return this.#revelada
    }

    revelar() {
        return new ResponseModel(this.#valor, this.#certa, true)
    }

     toObject() {
        return {
            valor: this.#valor,
            certa: this.#certa,
            revelada: this.#revelada
        }
    }

    static createUsingObject(obj: ResponseModel): ResponseModel {
        return new ResponseModel(obj.valor, obj.certa, obj.revelada)
    }
}