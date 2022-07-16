let produtos = [
    {
        name: "Uva Crimson",
        price: 44.99
    },
    {
        name: "Vinho Canção",
        price: 17.98
    },
    {
        name: "Água de coco",
        price: 8.99
    },
    {
        name: "Mamão",
        price: 9.98
    },
    {
        name: "Água tônica",
        price: 17.98
    }
]

let totalCompras = somarProdutos(produtos)

let body = document.querySelector("body")

function criarElementos1vez(){
    let main  = document.createElement("main")
    let h1 = document.createElement("h1")
    let divContainer = document.createElement("div")
    let divDescrCarrinho = document.createElement("div")
    let pItem = document.createElement("p")
    let pValor = document.createElement("p")
    let ul = document.createElement("ul")
    // li's //
    let section = document.createElement("section")
    let divTotal = document.createElement("div")
    let pTotal = document.createElement("p")
    let pValorTotal = document.createElement("p")
    let botaoFinalizar = document.createElement("button")

    h1.innerText = "Carrinho de Compras"
    divContainer.className = "container"
    divDescrCarrinho.className = "descricaoCarrinho"
    pItem.innerText = "Item"
    pValor.innerText = "Valor"
    ul.className = "productList"
    divTotal.className = "total"
    pTotal.innerText = "Total"
    pValorTotal.innerText = `R$ ${totalCompras}`
    botaoFinalizar.className = "botao"
    botaoFinalizar.innerText = "Finalizar Compra"
    
    body.appendChild(main)
    main.append(h1, divContainer)
    divContainer.append(divDescrCarrinho, ul, section)
    divDescrCarrinho.append(pItem, pValor)
    section.append(divTotal, botaoFinalizar)
    divTotal.append(pTotal, pValorTotal)
 
    return main
}


function criarElementosLista(objeto){
    let li = document.createElement("li")
    let item = document.createElement("p")
    let valor = document.createElement("p")

    li.className = "productDetails"
    item.innerText = objeto.name
    valor.innerText = objeto.price

    li.append(item, valor)

    return li
}

criarElementos1vez()


let ul = document.querySelector("ul")

function inserirProdutos(arrawObjetos){
    for(let i = 0; i < arrawObjetos.length; i++){
        let li = criarElementosLista(arrawObjetos[i])
        ul.appendChild(li)  
    }
}
inserirProdutos(produtos)

function somarProdutos(arrawObjetos){
    let total = 0
    for(let i = 0; i < arrawObjetos.length; i++){
        total += arrawObjetos[i].price
    }
   return total
}





















/*<main>
    <h1>Carrinho de Compras</h1>
    <div class="container">
        <div class="descricaoCarrinho">
            <p>Item</p>
            <p>Valor</p>
        </div>
            <ul class="productList">
                <li class="productDetails">
                    <p>Uva Crimsom</p>
                    <p>R$ 44.99</p>
                </li>
            </ul>
        <section>
            <div class="total">
                <p>Total</p>
                <p>R$ 44.99</p>
            </div>
                <button class="botao">Finalizar Compra</button>
        </section>
    </div>
</main>*/