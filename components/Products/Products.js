class Products {
    constructor() {
        this.classNameActive = 'products-element__btn_active'
        this.labelAdd = 'Добавить в корзину'
        this.labelRemove = 'Удалить из корзины'
    }

    handleSetLocationStorage(element, id) {
        const  { pushProduct, products } = localStorageUtil.putProducts(id)

        if(pushProduct) {
            element.classList.add(this.classNameActive)
            element.innerHTML = this.labelRemove
        } else {
            element.classList.remove(this.classNameActive)
            element.innerHTML = this.labelRemove
        }
        headerPage.render(products.length) // изменение счётчика header
    }


    render() {
        const productsStore = localStorageUtil.getProducts()
        let htmlCatalog = ''

        CATALOG.forEach(({ id, name, price, img }) => {
            let activeClass = ''
            let activeText = ''

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd
            } else {
                activeText = ' '+this.labelRemove
                activeClass = ' products-element__price_active'
            }



            htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__name">${name}</span>
                    <img class="products-element__img" src="${img}" />
                    <span class="products-element__price${activeClass}">
                        ⚡️${price.toLocaleString()} USD
                    </span>
                    <button class="products-element__btn" onClick="productsPage.handleSetLocationStorage(this, '${id}')">
                        ${activeText}
                    </button>
                </li>
            `
        })

        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `
        ROOT_PRODUCTS.innerHTML = html
    }
}

const productsPage = new Products()
productsPage.render()