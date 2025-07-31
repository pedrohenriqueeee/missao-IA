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
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Drible: Jogadores precisam quicar a bola no chão para se movimentar com ela.",
                afirmacao: "afirmação"
            },
            {
                texto: "Passes: Passar a bola entre os companheiros para avançar e criar chances.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
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
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
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
