function render(){

    const productsStore = localStorageUtil.getProducts()
    headerPage.render(productsStore.length)

    productsPage.render(CATALOG)

}
let CATALOG = []

// server/server.json
fetch('server/server.json')
.then((result)=>{return result.json()})
.then((result)=>{CATALOG = result
    setTimeout(()=>
    {
        spinnerPage.handleClear()
        render()
    },2500)}
).catch((error)=>
{
    spinnerPage.handleClear()
    errorPage.render()
})

// https://api.themoviedb.org/3/search/movie
// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWFiYzc5NzEyMDQzNDI2ZjU3YTYxMzVjNTBlMDE3NiIsInN1YiI6IjY1YmU2MWM1OTMxZWExMDBjOTk5YzhjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZHdKVEPrV0syXnjwGnqD8hUPUJeUV0zmClH3ZIalo9w'
//     }
//   };

// fetch('https://api.themoviedb.org/3/movie/111?language=en-US', options)
// .then((result)=>{return result.json()})
// .then((result)=>{console.log(result)})