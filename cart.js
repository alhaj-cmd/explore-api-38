const getInputValueById = id =>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value='';
    return inputValue;
}

const addProduct = () =>{
    const product = getInputValueById('input-field-card');
    const cardProduct = getInputValueById('input-field-porduct');
// dispaly 
    displayProduct(product,cardProduct);
   // localStorage.setItem(product,cardProduct)
   saveItemlocalstore(product,cardProduct);
}

const getItem = () => {
    let saveCard = localStorage.getItem('card');
    let cart ={};
    if (saveCard){
        cart = JSON.parse(saveCard); 
    } return cart
}


const saveItemlocalstore = (product,cardProduct) =>{
const cart = getItem();
cart[product]=cardProduct;
const cartstrinfied =JSON.stringify(cart);
localStorage.setItem('cart', cartstrinfied);
} 





const displayProduct = (product,cardProduct) =>{
    const productContainer=document.getElementById('product-container');
    const li = document.createElement('li')
    li.innerText =`${product} : ${cardProduct}`
    productContainer.appendChild(li);
}

const dispalyStoreProducts = () => {
    const cart = saveItemlocalstore();
    for (const product in cart){
        const cardProduct = cart[product]
        console.log(product,cardProduct);
    }
}
dispalyStoreProducts();