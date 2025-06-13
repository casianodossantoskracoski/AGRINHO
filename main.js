const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "você sabia que o campo e a cidade dependem um do outro?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "<b>conhecimento</b> sabe o porque cidade e campo dependem um do outo."
            },
            {
                texto: "não",
                afirmacao: "Você se destaca por <b> busca de conhecimento</b>, deseja saber o porque de campo e cidade dependerem um do outro."
            }
        ]
    },
    {
        enunciado: "veja:",
        alternativas: [
            {
                texto: "porque o campo depende da cidade?",
                afirmacao: "é provavel que more na <b>campo</b>."
            },
            {
                texto: "porque a cidade depende do campo?",
                afirmacao: "é provavel que more na <b>cidade</b>."
            },
        ]
    },
    {
        enunciado: "veja:",
        alternativas: [
            {
                texto: "as cidades oferecem um mercado consumidor para os produtos rurais, acesso a serviços e infraestrutura essenciais e oportunidades de emprego.",
                afirmacao: ""
            },
            {
                texto: "é no campo que os alimentos consumidos pela população da cidade são produzidos.",
                afirmacao: ""
            },
        ]
    },
    {
        enunciado: " ",
        alternativas: [
            {
                texto: "Negligência médica",
                afirmacao: "<b>Foco</b> Apesar do uso de algumas técnicas serem restringidas apenas para casos específicos, ainda são utilizadas diariamente por profissionais da saúde."
            },
            {
                texto: "Desinformação da população.",
                afirmacao: "<b>Curiosidade</b> Mesmo com fácil acesso a informação, o assunto é pouco comentado e dado certa  importância. "
            },
        ]
    },
    {
        enunciado: "Como evitar que ocorra a extinção de animais nativos?",
        alternativas: [
            {
                texto: "Criação de mais áreas de proteção ambiental, com grande biodiversidade ajudaria a melhorar esse cenário?",
                afirmacao: "Sim, pois preservando nosso meio ambiente, protegemos nossos animais e facilitamos sua reprodução "
            },
            {
                texto: "Evitar intervenções de espécies não nativas neste ambiente pode ser uma alternativa?",
                afirmacao: "Sim, animais de um determinado local não estão preparados para lidar com predadores de outras áreas, levando a um extermínio da espécie local"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.innerHTML = historiaFinal;
    caixaAlternativas.innerHTML = "";
}

mostraPergunta(); 