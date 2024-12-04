const callStore = document.getElementById('ctaStore')

callStore.addEventListener('click', () => {
    const store = document.getElementsByClassName('filters')[0]

    store.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })

})

const products = [
    {
        id: 1,
        name: "Guitarra electroacústica Epiphone - JC15 deluxe",
        price: 2000000,
        stock: 10,
        category: 'Cuerdas',
        img: 'https://tmsmusic.co/cdn/shop/files/guitarra-electro-acustica-epiphone-j-15-ec-deluxe-ee21vsch1-the-music-site-1.jpg?v=1708735576&width=600'
    },
    {
        id: 2,
        name: "Guitarra acústica Yamaha - F310",
        price: 800000,
        stock: 5,
        category: 'Cuerdas',
        img: 'https://sinfoniamusical.com/cdn/shop/files/F310.jpg?v=1707940734&width=900'
    },
    {
        id: 3,
        name: "Bajo Eléctrico Fender - Player Series",
        price: 1500000,
        stock: 3,
        category: 'Cuerdas',
        img: 'https://ortizo.com.co/cdn/shop/files/GB0059_900x.jpg?v=1684171849'
    },
    {
        id: 4,
        name: "Batería Yamaha - Stage Custom",
        price: 3000000,
        stock: 2,
        category: 'Percusión',
        img: 'https://es.yamaha.com/es/files/SCB_CLW_e7eb83bdc576878366879827f3c1a3c2.jpg?impolicy=resize&imwid=2000&imhei=800'
    },
    {
        id: 5,
        name: "Guitarra eléctrica Fender - Telecaster standard",
        price: 2000000,
        stock: 5,
        category: 'Cuerdas',
        img: 'https://www.haikuo.com.tw/upload_file/haikuo/961/17212099611.jpg'
    },
    {
        id: 6,
        name: "Piano eléctrico  Yamaha - Montage 8",
        price: 30000000,
        stock: 5,
        category: 'Teclados',
        img: 'https://www.falymusic.com/images/thumbnails/465/465/detailed/7/montage-8-4_opt.jpg'
    },
    {
        id: 7,
        name: "Cajón peruano LP - Aspire",
        price: 500000,
        stock: 20,
        category: 'Percusión',
        img: 'https://www.miche.com.co/cdn/shop/products/CAJO04_787x787.png?v=1574712914'
    },
    {
        id: 8,
        name: "Batería acústica Mapex - Q Series",
        price: 4500000,
        stock: 10,
        category: 'Percusión',
        img: 'https://dojiw2m9tvv09.cloudfront.net/52889/product/X_captura-de-pantalla-2024-06-14-a-la-s-14-39-125059.png?27&time=1732585662',

    },
    {
        id: 9,
        name: "Sintetizador Nord Stage - 4 88",
        price: 5000000,
        stock: 10,
        category: 'Teclados',
        img: 'https://www.recmusicpy.com/img/1/2337/produtos/540/755812b7ec440c4193770b5876124953.jpg'
    },
    {
        id: 10,
        name: "Keytar Alesis - Vortex Wireless 2",
        price: 1500000,
        stock: 10,
        category: 'Teclados',
        img: 'https://www.malaga8.com/65022-large_default/alesis-vortex-wireless-2-p-26925.jpg'
    },
    {
        id: 11,
        name: "Batería eléctrica Alesis - Nitro Max",
        price: 1800000,
        stock: 10,
        category: 'Percusión',
        img: 'https://www.pianosbogota.com/wp-content/uploads/2023/11/BATERIA-ALESIS-NITRO-MAX-KIT-bogota.png'
    },
    {
        id: 12,
        name: "Piano Digital Roland - FP E50",
        price: 6000000,
        stock: 5,
        category: 'Teclados',
        img: 'https://m.media-amazon.com/images/I/61RiFWYpWSL._AC_SX569_.jpg'
    }


]



const containerGridProducts = document.getElementById('gridProducts')

function renderProducts(products) {

    containerGridProducts.innerHTML = ''

    products.forEach(product => {
        const productDiv = document.createElement('div')
        productDiv.className = 'product-card'
        const categories = ['Cuerdas', 'Teclados', 'Percusión']

        const filterCategories = document.getElementById('categoryContainer')

        categories.forEach(e => {
            const label = document.createElement('label')

            const checkbox = document.createElement('input')
            checkbox.type = 'checkbox'
            checkbox.value = e

            label.appendChild(checkbox)
            label.appendChild(document.createTextNode(e))
            filterCategories.appendChild(label)
        })

        const img = document.createElement('img')
        img.src = product.img || '/assets/imgs/150.png'

        const name = document.createElement('h3')
        name.textContent = product.name

        const price = document.createElement('p')
        price.textContent = `Precio: $${product.price.toLocaleString()}`

        const button = document.createElement('button')
        button.textContent = 'Agregar al carrito'
        button.className = 'add-to-cart'
        button.addEventListener('click', () => {
            alert(`${product.name} agregado al carrito.`)
        })

        productDiv.appendChild(img)
        productDiv.appendChild(name)
        productDiv.appendChild(price)
        productDiv.appendChild(button)

        containerGridProducts.appendChild(productDiv)
    })
}

renderProducts(products)


const searchProducts = document.getElementById('SearchStore')

searchProducts.addEventListener('input', () => {
    const searchTerm = searchProducts.value.toLowerCase()

    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchTerm)
    })

    renderProducts(filteredProducts)
})

const filterProducts = document.getElementById('categoryContainer')

filterCategories.addEventListener

