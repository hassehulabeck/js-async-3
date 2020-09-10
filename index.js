let url = 'https://www.hulabeck.se/html/temp/products.json'

fetch(url)
    // Gör om till json
    .then(response => response.json())

    // Ta emot data från ovanstående funktion, filtrera och returnera resultatet.
    .then((data) => {
        let filteredProducts = data.products.filter((product) => {
            return product.consumerPrice > 10 && product.consumerPrice < 100
        })
        console.log(filteredProducts)
        return filteredProducts
    })

    // Ta emot och sortera
    .then((data) => {
        data.sort((a, b) => (a.consumerPrice > b.consumerPrice) ? 1 : -1)
        console.log(data)
    })