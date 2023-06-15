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

strollersButton.addEventListener('click', async () => {
    let strollers = await axios.get(`http://localhost:3001/api/categories/6488b05f3206cd424bef481b`)
    console.log(strollers.data)
})


carSeatsButton.addEventListener('click', async () => {
    let carSeats = await axios.get('http://localhost:3001/api/categories/6488b05f3206cd424bef481c')
    console.log(carSeats.data)
})
   

highChairsButton.addEventListener('click', async () => {
    let highChairs = await axios.get('http://localhost:3001/api/categories/6488b05f3206cd424bef481d')
    console.log(highChairs.data)
})


uppaBabyButton.addEventListener('click', async () => {
    let uppaBaby = await axios.get('http://localhost:3001/api/brands/6488b05f3206cd424bef4815')
    console.log(uppaBaby.data)
})


doonaButton.addEventListener('click', async () => {
    let doona = await axios.get('http://localhost:3001/api/brands/6488b05f3206cd424bef4816')
    console.log(doona.data)
})


babyZenButton.addEventListener('click', async () => {
    let babyZen = await axios.get('http://localhost:3001/api/brands/6488b05f3206cd424bef4817')
    console.log(babyZen.data)
})


chiccoButton.addEventListener('click', async () => {
    let chicco = await axios.get('http://localhost:3001/api/brands/6488b05f3206cd424bef4818')
    console.log(chicco.data)
})


gracoButton.addEventListener('click', async () => {
    let graco = await axios.get('http://localhost:3001/api/brands/6488b05f3206cd424bef4819')
    console.log(graco.data)
})

babyTrendButton.addEventListener('click', async () => {
    let babyTrend = await axios.get('http://localhost:3001/api/brands/6488b05f3206cd424bef481a')
    console.log(babyTrend.data)
})