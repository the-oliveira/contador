function contar(){
    //coletar dados do html
    var inicioF = document.querySelector('input#inicio')
    var fimF = document.querySelector('input#fim')
    var passoF = document.querySelector('input#passo')
    var resposta = document.querySelector('div#resposta')
    
    //verificar se dados estão vazios
    if(inicioF.value.length == 0 || fimF.value.length == 0 || passoF.value.length == 0){
        alert('Valores incorretos!')
    } else {
        //coletando valores do html
        var inicio = Number(inicioF.value)
        var fim = Number(fimF.value)
        var passo = Number(passoF.value)
    
        if (passo != 0){
            if (inicio < fim){
                //contagem crescente
                for(let contador = inicio; contador <= fim; contador += passo){
                    resposta.innerHTML += `${contador} `
                }
                resposta.innerHTML += 'Fim!'
            } else{
                //contagem regressiva
                for(let contador = inicio; contador >= fim; contador -= passo){
                    resposta.innerHTML += `${contador} `
                }
                resposta.innerHTML += 'Fim!'
            }
        } else {
            alert('Passo não pode ser 0, considerando passo 1...')
            let passo = 1
            if(inicio < fim) {
                //contagem crescente
                for(let contador = inicio; contador <= fim; contador += passo){
                    resposta.innerHTML += `${contador} `
                }
                resposta.innerHTML += 'Fim!'
            } else{
                //contagem regressiva
                for(let contador = inicio; contador >= fim; contador -= passo){
                    resposta.innerHTML += `${contador} `
                }
                resposta.innerHTML += 'Fim!'
            }
            
        }
    }

}