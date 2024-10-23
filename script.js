const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado')

const perguntas = [ //serve para abrir lista de perguntas
    {//abre o objeto das perguntas
        enunciado: "Você gosta de estudar?",
        alternativas: [{texto: "sim", afirmação:"Sim, eu gosto de estudar"},{texto: "não", afirmação:"Não, eu não gosto de estudar"}]
    },
    {
        enunciado: "Você acha que a educação muda vidas?",
        alternativas: [{texto: "Sim", afirmação:"Sim, eu acredito no poder da educação"},{texto: "Não", afirmação:"Não, eu não acredito no poder da educação"}]
    },
    {
        enunciado: "Você já decidiu no que gostaria de trabalhar",
        alternativas: [{texto: "Sim", afirmação:"Sim, ja estou me especializando para"}, {texto: "Não", afirmação:"Não, ainda estou decidindo"}]
    },
]

let posicao = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (posicao >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas(){
        for (const alternativa of perguntaAtual.alternativas) {
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativas);
        }
    
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    historiaFinal = afirmacoes ;
    posicao++
    mostraPergunta();
}
function mostraResultado(){caixaPerguntas.textContent = "Num futuro próximo...";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "Vou ser rico grças a educação ";
}

mostraPergunta();

