console.log('Script loaded');

// // console.log(getAvailableProducts());
const products = getAvailableProducts();

//  console.log(products);

function renderProducts(products) { 
    const productUl = document.querySelector('section.products > ul');
    const productLi = document.createElement('li');
    productUl.appendChild(productLi);
    products.forEach(element => {
        const newSubUl = document.createElement('ul');
        productLi.appendChild(newSubUl);

    });

}
