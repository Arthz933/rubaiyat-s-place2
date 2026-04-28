const form = document.getElementById("form")
const conteudoformulario = document.getElementsByClassName("conteudo-formulario")
const nomedobarbeiro = document.getElementById("nomedobarbeiro")
const botaodetarefas = document.querySelectorAll(".botaodetarefa")
const contador = document.getElementById("contador")
let cliques = 0;
const listadetarefas = document.getElementById("tarefas")
const btnzeratarefas = document.getElementById("btnreinicia")
const espacoresultado = document.getElementById("espaco-resultado")


document.getElementById('btnfecharmodal').addEventListener('click', () => {
    document.getElementById('modal-alert').style.display = 'none';
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checaonomedobarbeiro();
})

btnzeratarefas.addEventListener("click", () => {
    location.reload();
});

botaodetarefas.forEach(botao => {
    botao.addEventListener("click", (event) => {
        event.preventDefault();

        if(nomedobarbeiro.value == "") {
            document.getElementById('modal-alert').style.display = 'flex';
            return;
        }

        cliques++;
        espacoresultado.textContent = "Resultado:    " + " olá " + nomedobarbeiro.value + ", você tem " + cliques + " tarefas concluídas !";
    });
});

function checaonomedobarbeiro() {
    if(nomedobarbeiro.value == "") {
        document.getElementById('modal-alert').style.display = 'flex';
    }
}

function funcaoerror(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a2")
    textMessage.innerText = message;
    formItem.classname = "conteudo-formulario.error"
}
