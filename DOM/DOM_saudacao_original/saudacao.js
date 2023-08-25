(function (){
    const nameUser = "Deivisson";
    const elemento = document.querySelector('.top-bar p');
    if (nameUser){
        elemento.textContent += `${nameUser}`;
    } else {
        elemento.parentElement.style.display = 'none';
    }
})();