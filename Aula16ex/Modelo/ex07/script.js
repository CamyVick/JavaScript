let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores =[]

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
        } else {
            return false
        }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){//Verificar se é um número
        valores.push(Number(num.value))//adicionar o valor no vetor
        let item = document.createElement('option')//cria um elemento
        item.text = `Valor ${num.value} adicionado.`//Mensagem na tela
        lista.appendChild(item)// lista recebe item
        res.innerHTML = '' //Quando adicionar um novo numero limpar a finalização 
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''//Limpar assim que eu terminar de adicionar
    num.focus() //Ainda permanecer na função escrever
}
function finalizar(){
    if( valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
        let tot = valores.length// quantos elementos o vetor tem
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for( let pos in valores){ // Laço para avaliar tudo (percurso)
            soma+= valores[pos]// Somando os valores recebidos 
            
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
            
        }
        media = soma / tot //Somando as medias
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor encontrado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor encontrado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores digitados foi ${media}.</p>`
    }
}