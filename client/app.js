const allProductsButton = document.querySelector('#allProducts-button')

// CATEGORY BUTTONS
const strollersButton = document.querySelector('#strollers-button')
const carSeatsButton = document.querySelector('#carSeats-button')
const highChairsButton = document.querySelector('#highChairs-button')

// BRAND BUTTONS
const uppaBabyButton = document.querySelector('#uppaBaby-button')
const doonaButton = document.querySelector('#doona-button')
const babyZenButton = document.querySelector('#babyZen-button')
const chiccoButton = document.querySelector('#chicco-button')
const gracoButton = document.querySelector('#graco-button')
const babyTrendButton = document.querySelector('#babyTrend-button')

let selectedContent = document.querySelector('#selected-content')

allProductsButton.addEventListener('click', async () => {
    let allProducts = await axios.get(`http://localhost:3001/api/products`)
    console.log(allProducts.data)
    let allProductsArray = allProducts.data
    allProductsArray.map((everyProduct)=> {
        selectedContent.innerHTML +=
    `   <h3>${everyProduct.name}</h3>
        <h3>${everyProduct.description}</h3>
        <h3>Capacity: up to ${everyProduct.capacity}</h3>
        <h3>${everyProduct.price}</h3>
        <img alt="An image of ${everyProduct.name}." src="${everyProduct.image}"/>
    `
    })
})


strollersButton.addEventListener('click', async () => {
    let strollers = await axios.get(`http://localhost:3001/api/categories/6488b05f3206cd424bef481b`)
    console.log(strollers.data)
    let strollersArray= strollers.data
    strollersArray.map((stroller)=>{
        selectedContent.innerHTML += 
    `   <h3>${stroller.name}</h3>
        <h3>${stroller.description}</h3>
        <h3>Capacity: up to ${stroller.capacity}</h3>
        <h3>${stroller.price}</h3>
        <img alt="An image of ${stroller.name}." src="${stroller.image}"/>
    `
    })
})


carSeatsButton.addEventListener('click', async () => {
    let carSeats = await axios.get('http://localhost:3001/api/categories/6488b05f3206cd424bef481c')
    console.log(carSeats.data)
    let carSeatsArray = carSeats.data
    carSeatsArray.map((carSeat)=> {
        selectedContent.innerHTML +=
    `   <h3>${carSeat.name}</h3>
        <h3>${carSeat.description}</h3>
        <h3>Capacity: up to ${carSeat.capacity}</h3>
        <h3>${carSeat.price}</h3>
        <img alt="An image of ${carSeat.name}." src="${carSeat.image}"/>
    `
    })
})
   

highChairsButton.addEventListener('click', async () => {
    let highChairs = await axios.get('http://localhost:3001/api/categories/6488b05f3206cd424bef481d')
    console.log(highChairs.data)
    let highChairsArray = highChairs.data
    highChairsArray.map((highChair)=> {
        selectedContent.innerHTML +=
    `   <h3>${highChair.name}</h3>
        <h3>${highChair.description}</h3>
        <h3>Capacity: up to ${highChair.capacity}</h3>
        <h3>${highChair.price}</h3>
        <img alt="An image of ${highChair.name}." src="${highChair.image}"/>
    `
    })
})


uppaBabyButton.addEventListener('click', async () => {
    let uppaBaby = await axios.get('http://localhost:3001/api/brands/6488b05f3206cd424bef4815')
    console.log(uppaBaby.data)
    let uppaBabyArray = uppaBaby.data
    uppaBabyArray.map((product)=> {
        selectedContent.innerHTML +=
    `   <h3>${product.name}</h3>
        <h3>${product.description}</h3>
        <h3>Capacity: up to ${product.capacity}</h3>
        <h3>${product.price}</h3>
        <img alt="An image of ${product.name}." src="${product.image}"/>
    `
    })
})


doonaButton.addEventListener('click', async () => {
    let doona = await axios.get('http://localhost:3001/api/brands/6488b05f3206cd424bef4816')
    console.log(doona.data)
    let doonaArray = doona.data
    doonaArray.map((product)=> {
        selectedContent.innerHTML +=
    `   <h3>${product.name}</h3>
        <h3>${product.description}</h3>
        <h3>Capacity: up to ${product.capacity}</h3>
        <h3>${product.price}</h3>
        <img alt="An image of ${product.name}." src="${product.image}"/>
    `
    })
})


babyZenButton.addEventListener('click', async () => {
    let babyZen = await axios.get('http://localhost:3001/api/brands/6488b05f3206cd424bef4817')
    console.log(babyZen.data)
    let babyZenArray = babyZen.data
    babyZenArray.map((product)=> {
        selectedContent.innerHTML +=
    `   <h3>${product.name}</h3>
        <h3>${product.description}</h3>
        <h3>Capacity: up to ${product.capacity}</h3>
        <h3>${product.price}</h3>
        <img alt="An image of ${product.name}." src="${product.image}"/>
    `
    })
})


chiccoButton.addEventListener('click', async () => {
    let chicco = await axios.get('http://localhost:3001/api/brands/6488b05f3206cd424bef4818')
    console.log(chicco.data)
    let chiccoArray = chicco.data
    chiccoArray.map((product)=> {
        selectedContent.innerHTML +=
    `   <h3>${product.name}</h3>
        <h3>${product.description}</h3>
        <h3>Capacity: up to ${product.capacity}</h3>
        <h3>${product.price}</h3>
        <img alt="An image of ${product.name}." src="${product.image}"/>
    `
    })
})


gracoButton.addEventListener('click', async () => {
    let graco = await axios.get('http://localhost:3001/api/brands/6488b05f3206cd424bef4819')
    console.log(graco.data)
    let gracoArray = graco.data
    gracoArray.map((product)=> {
        selectedContent.innerHTML +=
    `   <h3>${product.name}</h3>
        <h3>${product.description}</h3>
        <h3>Capacity: up to ${product.capacity}</h3>
        <h3>${product.price}</h3>
        <img alt="An image of ${product.name}." src="${product.image}"/>
    `
    })
})

babyTrendButton.addEventListener('click', async () => {
    let babyTrend = await axios.get('http://localhost:3001/api/brands/6488b05f3206cd424bef481a')
    console.log(babyTrend.data)
    let babyTrendArray = babyTrend.data
    babyTrendArray.map((product)=> {
        selectedContent.innerHTML +=
    `   <h3>${product.name}</h3>
        <h3>${product.description}</h3>
        <h3>Capacity: up to ${product.capacity}</h3>
        <h3>${product.price}</h3>
        <img alt="An image of ${product.name}." src="${product.image}"/>
    `
    })
})