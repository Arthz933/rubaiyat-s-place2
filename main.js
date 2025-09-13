const form = document.getElementById("form")
const conteudoformulario = document.getElementsByClassName("conteudo-formulario")
const nomedobarbeiro = document.getElementById("nomedobarbeiro")
const botaodetarefas = document.getElementById("botaodetarefa")
const contador = document.getElementById("contador")
let cliques = 0;
const listadetarefas = document.getElementById("tarefas")
const btnzeratarefas = document.getElementById("btnreinicia")


form.addEventListener( "submit", (event) =>  {
event.preventDefault();

 checaonomedobarbeiro();
})

function reiniciapagina() {
  btnzeratarefas = location.reload();
}

listadetarefas.addEventListener("click", () => {
    cliques++; 
    contador.textContent = " olá " + nomedobarbeiro.value + ", você tem " + cliques + " tarefas concluídas !"  // CONSIDERA CLIQUES APENAS NA LISTA DE TAREFAS
  });


 function checaonomedobarbeiro() {
    const barbeiro = nomedobarbeiro.value;



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






