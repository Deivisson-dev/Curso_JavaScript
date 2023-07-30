/* 
Função calcula imc
====Requisitos===
 1-IMC = peso/alutura².
 2-Deve retornar um unico numero.
 3-Deve gerar um erro se receber um parametro não numero.
 4-Deve retornar erro caso não reba nenhum parametro dentre os dois.
*/

function calcImc(peso, altura, callback){
    if (peso === undefined || altura === undefined){
        throw Error('Função espera dois parametros');
    }

    if (typeof peso !== 'number' || typeof altura !== 'number'){
        throw Error('Somente números');
    }
    
    let imc = peso / (altura * altura);
    imc = imc.toFixed(2);

    if (typeof callback === 'function'){
        return callback(imc);
    }
    return imc;
}

function classificaImc(imc){
    if (arguments.length === 0){
        throw Error('Função espera um parametro');
    }
    if (imc <= 16.9){
        return 'Muito abaixo do peso';
    } else if (imc <= 18.4){
        return 'Abaixo do peso';
    } else if (imc <= 24.9){
        return 'Peso normal';
    } else if (imc <= 29.9){
        return 'Acima do peso';
    } else if (imc <= 34.9){
        return 'Obesidade Grau I';
    } else if (imc <= 40){
        return 'Obesidade Grau II';
    } else {
        return 'Obesidade Grau III';
    }
}

let imc = calcImc(60, 1.65);
let imc2 = calcImc(60, 1.65, classificaImc);

console.log(imc);
console.log(imc2);