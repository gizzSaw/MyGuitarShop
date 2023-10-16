function render() {
    const productsStore = localStorageUtil.getProducts()
    
    headerPage.render(productsStore.length)
    productsPage.render()
    //shoppingPage.render()
}

spinnerPage.render()

let CATALOG = []



fetch('server/catalog1.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body

        setTimeout(() => {
            spinnerPage.handleClear()
            render()
        }, 1000) // искусственная задержка для показа спинера

    })
    .catch(error => {
        spinnerPage.handleClear()
        errorPage.render(error)
    })