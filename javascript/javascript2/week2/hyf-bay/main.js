console.log('Script loaded');

console.log(getAvailableProducts());
const products = getAvailableProducts();
//  console.log(products);
const productUl = document.querySelector('section.products > ul');   
console.log(productUl);
function renderProducts(products) {  
    products.forEach(product => {
        const productLi = document.createElement('li');
        const shipsToHTML = products.shipsTo.reduce((acc, country) => `<li>${acc}</li><li>${country}</li>`);

        productLi.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>`;
                
        productUl.appendChild(productLi);        
    });  
} 
renderProducts(products);

const searchProduct = document.querySelector('div.search input');
searchProduct.addEventListener('input', requiredProducts);

function requiredProducts(){
    const searchProduct = document.querySelector('input');
    const filteredProduct = products.filter (product =>
        product.name.toLowerCase().includes(searchProduct.value.toLowerCase()));

    renderProducts(filteredProduct);
}