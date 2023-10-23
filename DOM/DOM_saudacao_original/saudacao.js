(function (){
    const nameUser = "Manuel"
    const elemento = document.querySelector('.top-bar p');
    if (nameUser){
        elemento.textContent += `${nameUser}`;
    } else {
        elemento.parentElement.remove();
    }
})();


function submeter(){
    const email_digitado = document.querySelector('#email').value;
    const msg_na_tela = document.getElementById('mensagem');
    if (email_digitado){
        msg_na_tela.innerHTML = `O email ${email_digitado} foi cadastrado com sucesso!`;
    }
    else {
        msg_na_tela.innerHTML = `Por favor, preencha o campo de email!`;
    }
}