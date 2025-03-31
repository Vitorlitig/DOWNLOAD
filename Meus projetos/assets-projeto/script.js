const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSom = document.querySelector('.som-all')
const buttonFilter = document.querySelector('.filter-all')


function showAll(productsarray) {

   let myLi = ''

    productsarray.forEach(product => {
        myLi += `
            <li>
                <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">R$ ${product.price.toFixed(2)}</p>
            </li>`

    })

    list.innerHTML = myLi

}
function mapAllItens(){
    const newPrices = menuOptions.map( (product) => ({
        ...product,
        price: product.price * 0.9,
    
    }))

    showAll(newPrices)

}

function somAllItens() {
    const valorTotal = menuOptions.reduce( (acc, curr) => acc + curr.price, 0)
    
    list.innerHTML = `
        <li>
            <p>O valor total dos itens e R$ ${valorTotal} </p>
       </li>`
 
}

function filterVegam(){
    const productVegan = menuOptions.filter((vegan) => vegan.vegan)
    
    showAll(productVegan)

    }






buttonShowAll.addEventListener("click", () => showAll(menuOptions))
buttonMapAll.addEventListener("click", mapAllItens)
buttonSom.addEventListener("click", somAllItens)
buttonFilter.addEventListener("click", filterVegam)
