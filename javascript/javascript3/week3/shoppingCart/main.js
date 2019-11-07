class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
	convertToCurrency(currency) {
		if (currency.toLowerCase() === "dollar") {
			const dollar = this.price * 0.14;
			return dollar;
		} else if (currency.toLowerCase() === "euro") {
			const euro = this.price * 0.13;
			return euro;
		} else if (currency.toLowerCase() === "rupee") {
			const rupee = this.price * 23.03;
			return rupee;
		}
		return this.price;
	}
}
const outputDiv = document.getElementById("output");
class ShoppingCart {
	constructor(products) {
		this.products = products;
	}

	addProduct(product) {
	this.products.push(product);
	}

	removeProduct(product) {
		const matchedIndex = this.products.indexOf(product);
		if (matchedIndex > -1) {
			this.products.splice(matchedIndex, 1);
		}
	}

	searchProduct(productName) {
		const searchedItems = this.products.filter(requiredPro =>
			requiredPro.name.toLowerCase().includes(productName.toLowerCase())
		);
		return searchedItems;
	}

	getTotal() {
		const totalPrice = this.products.reduce((sum, product) => {
			return sum + product.price;
		}, 0);
		return totalPrice;
	}
	renderProducts() {
		outputDiv.innerHTML = "";
		const newUl = document.createElement("ol");
		const h2 = document.createElement("h2");
		newUl.appendChild(h2);
		h2.textContent = `Your oder list`;
		outputDiv.appendChild(newUl);
		this.products.forEach(product => {
			const productList = document.createElement("li");
			productList.innerHTML = `${product.name}: ${product.price} KR`;
			newUl.appendChild(productList);
		});
		const totalAmount = document.createElement("h3");
		totalAmount.innerHTML = `Total price: ${this.getTotal()} kr`;
		outputDiv.appendChild(totalAmount);
	}

	getUser() {
		fetch("https://jsonplaceholder.typicode.com/users/1")
			.then(response => response.json())
			.then(data => {
				// console.log(data);
				const userName = document.createElement("h2");
				userName.innerHTML = `Customser Name: ${data.username}`;
				outputDiv.appendChild(userName);
			});
	}
}

const flatscreen = new Product("flat-screen", 5000);
const smartphone = new Product("smartphone", 3000);
const handset = new Product("handset", 300);
const keyboard = new Product("keyboard", 400);
const trimmer = new Product("trimmer", 250);
const mouse = new Product("mouse", 400);
const iphone7 = new Product("iphone7", 6000);
const playstation = new Product("playstation", 800);

const shoppingCart = new ShoppingCart([
	flatscreen,
	smartphone,
	handset,
	keyboard,
	trimmer,
	mouse,
	iphone7,
	playstation
]);

shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(smartphone);
shoppingCart.removeProduct(trimmer); // removes trimmer
shoppingCart.removeProduct(mouse); // removes mouse

shoppingCart.getTotal();
shoppingCart.renderProducts();
shoppingCart.getUser();
const plant = new Product('plant', 50); 
console.log(plant.convertToCurrency('dollar')) // 7.0
const harddrive = new Product("harddrive", 100);
console.log(harddrive.convertToCurrency('Rupee')) // 2303 

const productQuery = document.querySelector("#inputValue");
productQuery.addEventListener("input", () => {
	const input = productQuery.value;
	const searchDiv = document.getElementById("search");
	searchDiv.innerHTML = "";
	const searchUl = document.createElement("ul");
	searchDiv.appendChild(searchUl);
	shoppingCart.searchProduct(input).forEach(item => {
		const searchList = document.createElement("li");
		searchList.innerHTML = `Product: ${item.name}, Price: ${item.price}`;
		searchUl.appendChild(searchList);
	});
});
