function fn(cb){
    console.log('Executar ação de callback')
    console.log(typeof cb)
    if(typeof cb === "function"){
        cb();
    }
    else{
        console.log('Não é função')
    }
}

function callback(){
    console.log('função passada por parâmetro')
}

fn(callback)