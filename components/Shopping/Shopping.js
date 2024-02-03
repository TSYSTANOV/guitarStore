class Shopping{

    handlerClear(){
        ROOT_SHOPPING.innerHTML = ''
    }

    handlerOpenShoppingPage(){
        shoppingPage.render()
    }

    render(){

        const ProductStore = localStorageUtil.getProducts()
        let sumCatalog = 0

        let htmlCatalog = '';
        CATALOG.forEach(({id,name,price})=>
        {
            if(ProductStore.indexOf(id) !== -1){
                htmlCatalog += `
                <tr>
                <td class='shopping-element__name'>🔥 ${name}</td>
                <td class='shopping-element__price'>${price.toLocaleString()} USD</td>
                </tr>
                `
                sumCatalog += price
            }
        })

        const html = `
        <div class='shopping-container'>
        <div class='shopping__close' onclick='shoppingPage.handlerClear()'></div>
        <table>
        ${htmlCatalog}
        <tr>
        <td class='shopping-element__name'>Summary:</td>
        <td class='shopping-element__price'>${sumCatalog.toLocaleString()} USD</td>
        </tr>
        </table>
        </div>`
        ROOT_SHOPPING.innerHTML = html
    }

}

const shoppingPage = new Shopping()
