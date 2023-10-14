class Shopping {
    handleClear() {
        ROOT_SHOPING.innerHTML = ''
    }

    render() {
        const productsStore = localStorageUtil.getProducts()
        let htmlCatalog = ''
        let sumCatalog = 0

        CATALOG.forEach(({ id, name, price }) => {
            if(productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name">🎸 ${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} USD</td>
                    </tr>
                `
                sumCatalog +=price
            }
        });

        //нужно скачать svg иконку с сайта flat-icon и поместить в папку img
        const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.handleClear()">
                    <img class="shopping__close-icon" src="components/Shoping/img/close-icon.jpg"/>
                </div> 
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element__name">🎸 Сумма: </td>
                        <td class="shopping-element__price">${sumCatalog.toLocaleString()} USD</td>
                    </tr>
                </table>
            </div>
        `
        ROOT_SHOPING.innerHTML = html
    }
}

const shoppingPage = new Shopping()