class Error {
    render(error) {
        const html = `
        <div class="error-message">
            <h3> Нет доступа </h3> 
            <p> Лог ошибки: </p>
            <p>${error}</p>
        </div>
        `
        console.log(error)
        ROOT_ERROR.innerHTML = html
    }
}

const errorPage = new Error()