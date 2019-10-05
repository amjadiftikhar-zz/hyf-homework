console.log('Script loaded');

console.log(getAvailableProducts());
const products = getAvailableProducts();
//  console.log(products);
function renderProducts(products) {     
    const productUl = document.querySelector('section.products > ul');       
    products.forEach(product => {
        const productLi = document.createElement('li');
        productUl.appendChild(productLi); 
        const newUl =renderProduct(product)        
        productLi.appendChild(newUl);
    });

function renderProduct(product) {
    const ul = document.createElement('ul');  
    const nameLi = document.createElement('li');
    nameLi.innerText = product.name;    
    ul.appendChild(nameLi);
    const rateLi = document.createElement('li');
    rateLi.innerText = product.rating;    
    ul.appendChild(rateLi);
    const priceLi = document.createElement('li');
    priceLi.innerText = product.price;
    ul.appendChild(priceLi);
    const ratingLi = document.createElement('li');
    ratingLi.innerText = product.rating;
    ul.appendChild(ratingLi);
    const shipToLi = document.createElement('li');
    shipToLi.innerText = product.rating;
    ul.appendChild(shipToLi);   
    }  
} 
renderProducts(products);

