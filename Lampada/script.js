let imagem = document.getElementById("imagem")
let botao = document.getElementById("botao")



function acender(){ 
    if(botao.value == "Acender"){
        
        imagem.src = "./imagemLampada/lligada.png"
        document.body.style.backgroundColor = "white"
        imagem.style.width = "430px"
        botao.value = "Apagar"
        botao.style = 'background-color: grey; color: white; '
    
    }else if(botao.value == "Apagar"){
        imagem.src = "./imagemLampada/lapagada.png"
        document.body.style.backgroundColor = "black"
        imagem.style.width = "323px"
        botao.value = "Acender"
        botao.style = 'background-color: yellow; color: black; '
    }  
}