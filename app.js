let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Organic Oats',
        image: '1.PNG',
        price:  200 
    },
    {
        id: 2,
        name: 'Organic Dark Chocolate',
        image: '2.PNG',
        price: 175
    },
    {
        id: 3,
        name: 'Organic coffee',
        image: '3.PNG',
        price: 364
    },
    {
        id: 4,
        name: 'Organic Green Tea',
        image: '4.PNG',
        price: 255
    },
    {
        id: 5,
        name: 'Organic Dry Fruits',
        image: '5.PNG',
        price: 280
    },
    {
        id: 6,
        name: 'Organic Bars',
        image: '6.PNG',
        price: 250
    },
    {
        id: 7,
        name: 'Organic Protien',
        image: '7.PNG',
        price: 600
    },
    {
        id: 8,
        name: 'Organic Chips',
        image: '8.PNG',
        price: 150
    },
    {
        id: 9,
        name: 'Organic coconut Oil',
        image: '9.PNG',
        price: 400
    },
    {
        id: 10,
        name: 'Organic Pasta',
        image: '10.PNG',
        price: 240
    }
    ,
    {
        id: 11,
        name: 'Organic Smoothie',
        image: '13.PNG',
        price: 150
    },
    {
        id: 12,
        name: 'Organic Popcorn',
        image: '14.PNG',
        price: 200
    },
    {
        id: 13,
        name: 'Rice',
        image: '15.PNG',
        price: 195
    },
    {
        id: 14,
        name: 'jaggery',
        image: '16.PNG',
        price: 90
    },
    {
        id: 15,
        name: 'Organic Maggie',
        image: '17.PNG',
        price: 210
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

// calling database
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

// Connect to the database
mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true });
const dbName = 'organicfood';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
