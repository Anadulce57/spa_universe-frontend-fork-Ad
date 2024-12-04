function register() {
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    const passwordConfirmation = document.querySelector("#password-confirmation").value

    if(name === "" || email === "" || password === "" || passwordConfirmation === "") {
        alert("Preencha todas as informações seu asno!")
        return
    }

    if(password !== passwordConfirmation){
        alert("As senhas não conferem. Digite as senhas novamente")
        document.querySelector("#password").value = ""
        document.querySelector("#password-confirmation").value = ""
        return
    }

    const user = {
        name,
        email,
        password
    }
}

const button = document.querySelector("form button")
button.addEventListener("click", (event) =>{
    event.preventDefault() //bloqueia a página no caso que eu deseje
    register() //chamar a função
})