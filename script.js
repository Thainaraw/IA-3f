const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [ //serve para abrir lista de perguntas
    {//abre o objeto das perguntas
        enunciado: "Você utiliza a inteligência artificial no seu dia a dia?",
        alternativas: ["Sim","Não"]
    },
    {
        enunciado: "Você acha que a IA pode ajudar você no seu trabalho?",
        alternativas: ["sim","Não"]
    },
    {
        enunciado: "Você acha que a IA pode prejudicar as pessoas de alguma forma?",
        alternativas: ["Sim","Não"]
    },
    {
        enunciado: "Como você descobriu sobre a IA?",
        alternativas: ["Redes Sociais","Na escola"]
    },
    {
        enunciado: "Você acha que a IA pode mais atrapalhar o aprendizado das criaças no futuro, do que ajudar?",
        alternativas: ["Sim","Não"]
    },
    {
        enunciado: "Você gosta de utilizar Inteligencias Artificial?",
        alternativas: ["Sim","Não"]
    },
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){

}
mostraPergunta();