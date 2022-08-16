const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB");


const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 5,
  review: "I like it so much!"
});

// fruit.save();

const peach = new Fruit({
  // name: "Apple",
  rating: 9,
  review: "I love peach!"
});

// peach.save();


const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const pineapple = new Fruit({
  name: "Pineapple",
  score: 9,
  review: "Great fruit"
});

// pineapple.save();

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Amy",
  age: 12,
  favoriteFruit: pineapple
});


// person.save();

// Person.deleteMany({name: "John"}, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted all the documents!");
//   }
// });




// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 5,
//   review: "Don't like its look."
// });
//
// const banana = new Fruit({
//   name: "Banana",
//   rating: 9,
//   review: "Sweet!"
// });
//
// const orange = new Fruit({
//   name: "Orange",
//   rating: 10,
//   review: "I like it so much!"
// });

// Fruit.insertMany([kiwi, orange, banana], (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitDB.");
//   }
// });


// Fruit.updateOne({_id: "62af2c15e9a8ad6d081e6426"}, {name: "Peach"}, (err) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated the document!")
//   }
// })

// Fruit.deleteOne({name: "Peach"}, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully delted the document!");
//   }
//
//   Fruit.find((err, fruits) => {
//     if (err) {
//       console.log(err);
//     } else {
//       mongoose.connection.close();
//
//       fruits.forEach((fruit) => {
//         console.log(fruit.name);
//       })
//     }
//
//   });
// });

Person.updateOne({name: "John"}, {favoriteFruit: pineapple}, (err => {
  if(err) {
    console.log(err);
  } else {
    console.log("Successfully updated the document!");
  }
}));

// Fruit.find((err, fruits) => {
//   if (err) {
//     console.log(err);
//   } else {
//     mongoose.connection.close();
//
//     fruits.forEach((fruit) => {
//       console.log(fruit.name);
//     })
//   }
//
// });
