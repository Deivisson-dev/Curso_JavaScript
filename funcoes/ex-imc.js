/* 
Função calcula imc
====Requisitos===
 1-IMC = peso/alutura².
 2-Deve retornar um unico numero.
 3-Deve gerar um erro se receber um parametro não numero.
 4-Deve retornar erro caso não reba nenhum parametro dentre os dois.
*/

function calcImc(peso, altura){
    if (arguments.length === 0){
        throw Error('Função espera dois parametros');
    }

    if (typeof peso !== 'number' || typeof altura !== 'number'){
        throw Error('Somente números');
    }

    imc = peso / (altura * altura);
    imc = imc.toFixed(2);
    return imc;
}

function classificaImc(imc){
    if (arguments.length === 0){
        throw Error('Função espera um parametro');
    }

    if (typeof imc !== 'number'){
        throw Error('Somente números');
    }


    if (imc <= 16.9){
        console.log('Muito abaixo do peso');
    } else if (imc <= 18.4){
        console.log('Abaixo do peso');
    } else if (imc <= 24.9){
        console.log('Peso normal');
    } else if (imc <= 29.9){
        console.log('Acima do peso');
    } else if (imc <= 34.9){
        console.log('Obesidade Grau I');
    } else if (imc <= 40){
        console.log('Obesidade Grau II');
    } else {
        console.log('Obesidade Grau III');
    }
}

console.log(calcImc(150, 1.80));
classificaImc(42);