function render() {
    const productsStore = localStorageUtil.getProducts()
    
    headerPage.render(productsStore.length)
    productsPage.render()
    //shoppingPage.render()
}

spinner.render()

let CATALOG = []



fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body

        setTimeout(() => {
            spinner.handleClear()
            render()
        }, 2000)

    })
    .catch(error => {
        console.log(error)
    })