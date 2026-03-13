//buscar o elemento
let meuElemento = document.getElementById("paragrafo")

console.log(meuElemento);
console.log(meuElemento.textContent)

//buscar elementos pela classe
let paragrafo1 = document.getElementsByClassName("paragrafo")

console.log(paragrafo1)

for(let i = 0; i < paragrafo1.length; i++){
    console.log(paragrafo1[i].textContent)
}

//buscar elementos pela tag
let paragrafo2 = document.getElementsByTagName("p")
console.log(paragrafo2)


//criar elemento HTML
let destino = document.getElementById("elemento")
let elementoHtml = document.createElement("p")

elementoHtml.textContent = "Paragrafo criado via JavaScript"

destino.append(elementoHtml)


//criar lista de compras
let lista = document.getElementById("Lista")

let ul = document.createElement("ul") //lista nao ordenada

let itens = ["Arroz", "Feijão", "Suco"] //itens da lista

for(let i = 0; i < itens.length; i++){

    let li = document.createElement("li") //item da lista
    li.textContent = itens[i]

    ul.append(li)

}

lista.append(ul)


//algoritmo de soma
function somar(){

    //capturar o que o usuario digita
    let n1 = parseFloat(document.getElementById("num1").value)
    let n2 = parseFloat(document.getElementById("num2").value)

    console.log(typeof n1)

    let soma = n1 + n2

    let saida = `Resultado: <u>${soma}</u>`

    document.getElementById("resultado").innerHTML = saida

}

//eventos(clique)

let botao = document.getElementById("botao")
botao.onclick = function(){
alert("clicou")
botao.style.backgroundColor = "red"
botao.textContent = "Voce clicou sim!"

}