const form = document.getElementById("form")
const conteudoformulario = document.getElementsByClassName("conteudo-formulario")
const nomedobarbeiro = document.getElementById("nomedobarbeiro")
const botaodetarefas = document.getElementById("botaodetarefa")
const contador = document.getElementById("contador")
let cliques = 0;
const listadetarefas = document.getElementById("tarefas")


form.addEventListener( "submit", (event) =>  {
event.preventDefault();

 checaonomedobarbeiro();
})


listadetarefas.addEventListener("click", () => {
    cliques++; 
    contador.textContent = " olá " + nomedobarbeiro.value + ", você tem " + cliques + " tarefas concluídas !"  // CONSIDERAR CLIQUES APENAS NA LISTA DE TAREFAS
  });
 function checaonomedobarbeiro() {
    const barbeiro = nomedobarbeiro.value;

    console.log(barbeiro);

    if(barbeiro === "") {
        funcaoerror(nomedobarbeiro, "preencha um nome !")
    }
}  

function funcaoerror(input, message) {
    const formItem = input.parentElement; 
    const textMessage = formItem.querySelector("a2")

    textMessage.innerText = message;

    formItem.classname = "conteudo-formulario.error"
}