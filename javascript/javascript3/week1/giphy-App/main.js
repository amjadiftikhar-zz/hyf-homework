
const button = document.querySelector('.btn');
button.addEventListener('click', () => {
    const input = document.querySelector('#searchInput'); 
    const requiredResult = document.querySelector('#requiredNumber');    
    const setLimit = requiredResult.value; 
    const url = `http://api.giphy.com/v1/gifs/search?q=${input}`;
    const api = `&api_key=jEfjks6bhnIbPRq08whAPMJxbs77LUXi&limit=${setLimit}`;
    // const query = `q=?`
    const apiUrl = url + api; 
    fetch(apiUrl)
    .then(response => {
        return response.json();
    }).then(giphyData => {            
        // console.log(giphyData);
        renderRetrievedData(giphyData.data);
    })
})

function renderRetrievedData(items){
    const searchResult = document.querySelector('#searchResult');
    searchResult.innerHTML = "";
    items.forEach(element => {
        const searchItem = document.createElement('li')
        searchItem.classList.add('results');
        searchItem.innerHTML =`<img src="${element.images.original.url}">`
        searchResult.appendChild(searchItem);
        
    });
}
























     