const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [ //serve para abrir lista de perguntas
    {//abre o objeto das perguntas
        enunciado: "Você utiliza a IA no seu dia a dia?",
        alternativas: [{texto: "sim", afirmação:"afirmação da alternativa"},{texto: "não", afirmação:"afirmação da alternativa"}]
    },
    {
        enunciado: "Você acha que a IA pode  ajudar no seu trabalho?",
        alternativas: [{texto: "Sim", afirmação:"afirmação da alternativa"},{texto: "Não", afirmação:"afirmação da alternativa"}]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: [{texto: "Sim", afirmação:"afirmação da alternativa"},{texto: "Não, afirmação:"afirmação da alternativa"}]
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
        for (const alternativa of perguntaAtual.alternativas) {
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa;
            caixaAlternativas.appendChild(botaoAlternativas);
        }
    
}

mostraPergunta();
