function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (Fano.value.length == 0 || Fano .value > ano){
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(Fano.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.borderRadius="50%"
        img.width = "250"
        img.height = "250"
        if(fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','pirralho.png')  
            } else if(idade <= 25){
                // Adolescente
                img.setAttribute('src','adoleh.png')
            }else if (Idade < 50){
                //Adulto
                img.setAttribute('src','macho.png')
            }else{
                //velho
                img.setAttribute('src','velho.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src','pirralha.png')
            } else if(idade <= 25){
                // Adolescente
                img.setAttribute('src','adolem.png')
            }else if (Idade < 50){
                //Adulto
                img.setAttribute('src','mulher.png')
            }else{
                //velho
                img.setAttribute('src','velha.png')
            }
        }
        res.style.texAlign = 'center'
        res.innerHTML=`Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)//adicionar um elemento
    }
}