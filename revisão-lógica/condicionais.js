let idade = 17;
let paisPresentes = false;
let comprouBilhete = true;


if (!comprouBilhete === true){
    console.log("Não comprou o bilhete")
} else {
    if (idade >= 18){
        console.log("É maior de idade, pode viajar")
    } else {
        console.log("É menor de idade. Não, pode viajar")
    }
}


n1 = 8
n2 = 6
let media = (n1 + n2) / 2

if (n1 === 0 || n2 === 0){
    console.log('REPROVADO')
} else if (media < 7){
    console.group('Reprovado, Mas ainda dá para recuperar')
} else {
    console.log('Aprovado')
}