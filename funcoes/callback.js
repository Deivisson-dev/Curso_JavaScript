function teste(cb){
    console.log('executando teste');
    cb();
}

teste(function(){
    console.log('callback executado');
});