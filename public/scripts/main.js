import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    // adiciona a funcionalidade de escuta para cada botão
    button.addEventListener("click", handleClick)
})

const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", event => handleClick(event, false))
})

function handleClick(event, check = true) {
    event.preventDefault() // Previne de aparecer a # na URL da pagina
    const text = check ? "Marcar como lida" : "Excluir"
    const roomId = document.querySelector("#room-id").dataset.id //pega o id da pagina
    const questionId = event.target.dataset.id // pega o id da questao
    const slug = check ? "check" : "delete" // checa se foi clicado no "Marcar como lida" ou "Excluir"

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`    
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} essa pergunta` 
    modalButton.innerHTML = `Sim, ${text.toLowerCase()} `
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
    
    //Abrir modal    
    modal.open()
}
//Pegar quando o marcar como lido for clicado
