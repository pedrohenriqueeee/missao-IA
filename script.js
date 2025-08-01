const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O basquete foi criado em 1891 por James Naismith nos EUA. Começou como um jogo indoor com cestas de pêssego. Com o tempo, cresceu e se tornou um dos esportes mais populares do mundo, com destaque para a NBA e estrelas como Michael Jordan, Kobe Bryant e LeBron James",
        alternativas: [
            {
                texto:  "Você já jogou basquete?",
                afirmacao: "afirmação"
            },
            {
                texto: "Sabe como marcar pontos?",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "O basquete foi criado em 1891 por James Naismith nos EUA. Começou como um jogo indoor com cestas de pêssego. Com o tempo, cresceu e se tornou um dos esportes mais populares do mundo, com destaque para a NBA e estrelas como Michael Jordan, Kobe Bryant e LeBron James",
        alternativas: [
            {
                texto: "Como Jogar Basquete: O basquete é jogado por dois times de cinco jogadores cada.",
               
                afirmacao: "afirmação"
            },
            {
                texto: "Objetivo do Jogo: Marcar pontos arremessando a bola dentro da cesta adversária.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "No basquete, os jogadores devem driblar para se movimentar com a bola e utilizar passes para avançar em quadra e criar jogadas em equipe.",
        alternativas: [
            {
                texto: "Drible: Jogadores precisam quicar a bola no chão para se movimentar com ela.",
                afirmacao: "afirmação",
            },
            {
                texto: "Passes: Passar a bola entre os companheiros para avançar e criar chances.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "No basquete, existem diferentes tipos de arremesso que valem de 1 a 3 pontos, dependendo da distância. Na defesa, o objetivo é impedir o ataque adversário por meio de roubos de bola e bloqueios.",
        alternativas: [
            {
                texto: " Tipos de Arremesso: Lance livre (1 ponto), arremesso dentro da linha de 3 (2 pontos) e fora da linha de 3 (3 pontos).",
                afirmacao: "afirmação"
            },
            {
                texto: "Defesa: Tentar impedir o adversário de marcar, roubando a bola ou bloqueando arremessos.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "As regras do basquete proíbem empurrões, agarrões e outras infrações físicas, que resultam em faltas acumuladas. Vence a equipe que tiver mais pontos ao término do tempo regulamentar. ",
        alternativas: [
            {
                texto: "Regras de Faltas: Jogadores não podem empurrar, segurar ou cometer infrações físicas, faltas acumulam.",
                afirmacao: "afirmação"
            },
            {
                texto: "Final do Jogo: Vence o time com mais pontos ao final do tempo regulamentar.",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        // Adiciona estilo aos botões diretamente no JavaScript
        botaoAlternativas.style.borderRadius = "15px";
        botaoAlternativas.style.backgroundColor = "#008cff";
        botaoAlternativas.style.color = "#D7F9FF";
        botaoAlternativas.style.border = "none";
        botaoAlternativas.style.padding = "10px 20px";
        botaoAlternativas.style.margin = "5px";
        botaoAlternativas.style.cursor = "pointer";
        
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

mostraPergunta();
