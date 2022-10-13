// a file to givew the DB some intial data
// a file that we run on its own every time we want to
// get some data in the DB
// very commen to seed the DB separetly from the web app

const mongoose = require('mongoose');

// requiring the model
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() => {
        console.log("MONGO Connection open!");
    })
    .catch(err => {
        console.log("MONGO connection ERROR!");
        console.log(err)
    });


// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save()
//     .then( p => {
//         console.log(p);
//     })
//     .catch( e => {
//         console.log(e);
//     })

const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelone',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'
    }
];

Product.insertMany(seedProducts)
    .then( data => {
        console.log(data);
    })
    .catch( e => {
        console.log(e);
    })