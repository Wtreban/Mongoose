const express = require('express');
const mongoose = require('mongoose');
const app = express();
 
mongoose.connect('mongodb://localhost:27017/fruitDB', { useNewUrlParser: true, useUnifiedTopology: true });


app.listen(3000, ()=>{
    console.log("Server is Running on Port 3000");
});

const fruitSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,"Error: no name specified"]
    },
    rating:{
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});


const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 10,
    review: "Yummy"
});

const orange = new Fruit({
    name: "orange",
    rating: 8
});
 
//orange.save();
 

Fruit.find(function(error, fruits) {
    if(error){
        console.log(error);
    } else {
        fruits.forEach(fruit => {
            console.log(fruit.name);
            
        });
    }
});

Fruit.update({_id: "5e7b5fab0eee68370858b0d3"},{review:"Juicy fruit"}, function(error){
    if(error){
        console.log(err);
    }else{
        console.log("Record was updated");
    }
});

Fruit.deleteMany({name: "Banana"}, function(error){
    if(error){
        console.log(error);
    } else {
        console.log("Item successfully deleted.");
    }
});






const personSchema = new mongoose.Schema({
    firstName : String,
    lastName: String,
    age: Number
});

const Persons = mongoose.model("Persons", personSchema);

const person = new Persons({
    firstName: "Toomas",
    lastName: "Elbo",
    age: 25
});
const alex = new Persons({
    firstName: "Aleksei",
    lastName: "Osadtsi",
    age: 25
});
const andrei = new Persons({
    firstName: "Andrei",
    lastName: "Usachov",
    age: 29
});

Persons.find(function(error, persons){
    if(error){
        console.log(error);
    }else{
        persons.forEach(person =>{
            console.log(person.firstName + " " + person.age);
        });
    }
});

Persons.update({firstName:"Toomas"}, {age:30}, function(error){
    if(error){
        console.log(err);
    }else{
        console.log("Toomas has grown");
    }
})

/*Persons.insertMany([alex, andrei], (error)=>{
    if(error){
        console.log(err);
    }else{
        console.log("Persons successfuly added to fruitDB");
    }

});*/

//person.save();


//fruit.save();

/*Fruit.insertMany([banana, lemon], (error)=>{
    if(error){
        console.log(err);
    }else{
        console.log("Fruit successfuly added to fruitDB");
    }

});*/




