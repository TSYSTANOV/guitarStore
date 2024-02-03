class Products{
    constructor(){
        this.classNameActive = 'product-element__btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    handleSetStorage(element,id){
        const {pushProduct, products} = localStorageUtil.putProducts(id)
        if(pushProduct){
            element.classList.add(this.classNameActive)
            element.innerHTML = this.labelRemove 
        }else{
            element.classList.remove(this.classNameActive)
            element.innerHTML = this.labelAdd 
        }
        headerPage.render(products.length)
    }

    render(){
        const ProductStore = localStorageUtil.getProducts()

        let htmlCatalog = '';

        CATALOG.forEach(({id,name,price,img})=>
        {
            let activeClass = ''
            let activeText = ''

            if(ProductStore.indexOf(id) === -1)
            {
                activeText =  this.labelAdd
            }
            else
            {
                activeText =  this.labelRemove
                activeClass =  this.classNameActive
            }

            htmlCatalog += `
            <li class='product-element'>
            <span class='product-element__name'>${name}</span>
            <img class='product-element__image' src='${img}'/>
            <span class='product-element__price'>🔥 ${price.toLocaleString()} USD</span>
            <button class='product-element__btn ${activeClass}' onclick='productsPage.handleSetStorage(this, "${id}")'>${activeText}</button>
            </li>
            `
        })
        const html = `
        <ul class='product-container'>
        ${htmlCatalog}
        </ul>
        `
        ROOT_PRODUCTS.innerHTML = html
    }

}
const productsPage = new Products()

