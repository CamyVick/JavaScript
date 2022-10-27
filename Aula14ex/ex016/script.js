function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let raz = document.getElementById('txtz')//trazendo os elementos do HTML para o JS
    let res = document.querySelector('div#res')
    if(ini.value.length == 0 || fim.value.length == 0 || raz.value.length == 0){//Se o inicio, meio ou fim estiver vazio
        res.innerHTML= 'Impossível contar!'
        //window.alert('[ERRO] Os campos não podem esta vazio')
    }else{
        res.innerHTML=`Contando: <br>`
        let i = Number(ini.value)//transformando ini em um NÚMERO
        let f = Number(fim.value)
        let r = Number(raz.value)
        if(r <= 0){
            window.alert('Passo invalido! Considerando PASSO 1')
            r = 1
        }
        if(i < f){//Se o valor do inicio fo maior que o valor do fim 
            for(var c = i;c <= f;c += r){// c é o contador.O contador vai iniciar ni I e enquanto o contador for == ou menor que o fim, o contador vai receber ele mesmo mais o passo
                res.innerHTML += `${c} \u{1F449}`//U+1F449	
            }
        }else{
            for(let c = i; c>= f; c-= r){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}