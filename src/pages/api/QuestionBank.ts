import QuestionModel from "@/model/question";
import ResponseModel from "@/model/response";


export const question: QuestionModel[] = [
    new QuestionModel(201, 'Qual bicho transmite a Doença de Chagas?', [
        ResponseModel.wrong('Abelha'),
        ResponseModel.wrong('Barata'),
        ResponseModel.wrong('Pulga'),
        ResponseModel.right('Barbeiro'),
    ]),
     new QuestionModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
        ResponseModel.wrong('Caju'),
        ResponseModel.wrong('Côco'),
        ResponseModel.wrong('Chuchu'),
        ResponseModel.right('Abóbora'),
    ]),
     new QuestionModel(203, 'Qual é o coletivo de cães?', [
        ResponseModel.wrong('Manada'),
        ResponseModel.wrong('Alcateia'),
        ResponseModel.wrong('Rebanho'),
        ResponseModel.right('Matilha'),
    ]),
     new QuestionModel(204, 'Qual é o triângulo que todos os lados diferentes?', [
        ResponseModel.wrong('Equilátero'),
        ResponseModel.wrong('Isóceles'),
        ResponseModel.wrong('Trapézio'),
        ResponseModel.right('Escaleno'),
    ]),
]
