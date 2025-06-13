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
        enunciado: " e você prefere campo ou cidade?",
        alternativas: [
            {
                texto: "campo",
                afirmacao: "<b>gosta da calmaria</b> gosta da calmaria do campo e da vivenia com animais."
            },
            {
                texto: "cidade",
                afirmacao: "<b>gosta da interação com pessoas</b> gosta de conviver e interagir com muitas pesoas  "
            },
        ]
    },
    

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