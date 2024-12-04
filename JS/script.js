//Creamos un array con los productos disponibles en la tienda
const products = [
    {
        id: 1,
        productName: "🎸 Guitarra 🎸 ",
        price: 30000,
        desc: "Con sonido único y diseño de primera, esta guitarra es perfecta para todo estilo musical.",
        stock: 10,
    },
    {
        id: 2,
        productName: "🎹 Piano 🎹",
        price: 800000,
        desc: "Experimenta la riqueza sonora de un piano con calidad excepcional y resonancia inigualable.",
        stock: 5,
    },
    {
        id: 3,
        productName: "🥁 Batería 🥁",
        price: 100000,
        desc: "Siente el ritmo con una batería que combina potencia y calidad en cada golpe.",
        stock: 3,
    },
    ,
    {
        id: 5,
        productName: "🎷 Saxofón 🎷",
        price: 800000,
        desc: "Sonido cálido y expresivo, ideal para llevar tu música al siguiente nivel.",
        stock: 5,
    },
    {
        id: 6,
        productName: "🎻 Violín 🎻",
        price: 100000,
        desc: "Elegancia y precisión en cada nota, un violín que destaca en cualquier escenario.",
        stock: 3,
    }
]

//Función que recorre los productos por medio de un foreach
const showProducts = () => {
    products.forEach(product => {
        alert(`=====${product.productName.toUpperCase()}=====
    ID del producto: ${product.id}

    ${product.desc}

    Precio:  $${product.price}

    Unidades disponibles:  ${product.stock} `)
    })
}

// Función que busca los productos por ID
const searchProductById = (id) => {
    return products.find(product => product.id === id)
}

//Función para proceso de compra
const processPurchase = (product, qty) => {
    if (qty > product.stock) {
        alert(`Lo siento 🙁, no tenemos la cantidad solicitada de: ${product.productName}
            El stock disponible es: ${product.stock} Unidad(es)`)
        return false
    } else {
        product.stock -= qty
        finalPrice += product.price * qty
        purchaseSummary += `${product.productName} x ${qty} Unidad(es) \n`
        alert(`¡Hurra!🎉 Agregaste el siguiente producto:
             ${product.productName} x ${qty} Unidad(es)`)
        return false
    }
}


//Función para mostrar el resumen de la compra
const showPurchaseSummary = (purchaseSummary, finalPrice, fullName) => {
    if (finalPrice > 0) {
        alert(`Gracias por tu compra ${fullName},
        El resumen de tu compra es: 
        ${purchaseSummary} 
        el precio final de tu compra es: 
        $${finalPrice}`)
        alert("¡Gracias por elegirnos! ❤")
    } else {
        alert(`Oops!😮
            ${fullName} parece que no realizaste ninguna compra.`)
    }
}

//inicia flujo de condición del proceso

let finalPrice = 0
let returnShopping = true
let purchaseSummary = ""

//const buttonStore = document.getElementById('button-store')

buttonStore.addEventListener('click', () => {
    const fullName = prompt("Ingresa tu nombre por favor:").toUpperCase()
    alert(`Hola bienvenido ${fullName}, nos encanta tenerte aquí. Te invitamos a que conozcas nuestros productos `)

    showProducts()

    while (returnShopping) {
        let continueShopping = true
        while (continueShopping) {
            let productId = parseInt(prompt("Escribe el ID del producto que deseas comprar: "))

            if (!productId) {
                continueShopping = false
                returnShopping = false
                alert("Gracias por visitarnos, vuelve pronto 👋")
                break
            }

            let product = searchProductById(productId)
            if (product) {
                let qtyProduct = parseInt(prompt("¿Cuantas unidades deseas comprar?"))
                processPurchase(product, qtyProduct)
            } else {
                alert("Lo siento 🙁, el ID ingresado no existe. Intenta nuevamente 💪")
            }

            continueShopping = confirm("¿Deseas comprar algo más?")
            returnShopping = confirm("deberias agregar algo más 🧐")
        }
    }

    showPurchaseSummary(purchaseSummary, finalPrice, fullName)
})

