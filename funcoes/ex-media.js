function media(){
    let media = 0;
    let total = 0;

    if (arguments.length === 0){
        return 0;
    }

    for(let i = 0; i < arguments.length; i++){
        total += arguments[i];
        
        if (typeof arguments[i] !== 'number') {
        throw Error('Somente números');
        }
    }

    media = total / arguments.length;


    return media;
}

console.log(media())