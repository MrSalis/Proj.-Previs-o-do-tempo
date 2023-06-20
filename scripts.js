// VARIAVEIS= let= É um espaço de memoria do computador que guardamos algo (numero,letra,imagem)
// FUNÇÃO= É um trecho de codigo que é execultado quando solicitado
// ASYNC FUCTIO= Quando uma fução vai buscar informação de um servidor (site)
// CONSOLE. LOG= É a exibição da mensagem ou texto na inicialização do console
// QUERYSELECTOR= codigo de seleção, quando eu quero selecionar algo
// DOCUMENT= É a referencia do HTML na plataforma do JAVA SCRIPTS
// FETCH = Endereço do servidor

let chave = "06bfd266f7ad9bdc9b92d92ae87db53d"

function colocarNaTela(dados){
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".umidade").innerHTML = "Umidade " + dados.main.humidity + "%"
}

async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
    + cidade 
    + "&appid=" 
    + chave 
    +"&lang=pt_br" 
    +"&units=metric")
    .then(resposta => resposta.json())
    
    colocarNaTela(dados)
}

function cliqueiNoBotao(){
    let cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade)
  
}