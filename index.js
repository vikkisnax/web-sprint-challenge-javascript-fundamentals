//🚀🚀🚀  Topic #1 Closures 🚀🚀🚀//

/* 🚀🤓 Task 1: 🤓🚀 
Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();   
}
myFunction();

//🚀🚀🚀 ⬇️ 📝 Explanation ⬇️ 📝 🚀🚀🚀: 
// this deals with scope and closures.

// the 'nestedFunction' function can access the Parent's variable 'internal' because it can reach up and out to the Parent (myFunction) and use the Parent's variables, for example.

// aka the 'nestedFunction' function can reach outside of its scope to grab the value (myFunction's 'internal' variable) that was defined in the Parent's ('myFunction') scope. 

// question: lines 15 and 17 -- //invoking the functions? we won't see it unles we console.log right?




/* 🚀 Task 2: Counter 🚀 */
/* Use summation to do the following:
    1. Receive a number 
    2. Use a counter to return the summation of that number. 
    
For example, `summation(4)` should return 10 because 1+2+3+4 is 10. Note, you may use a for loop for this function if you wish */



function summation(num){
  let sum = 0
  for (let i=0; i<=num; i++){
    sum = sum + i
  }
  return sum;
}

console.log(summation(4));

// sum + i = sum
// 0   + 0   -- 0 
// 0   + 1   -- 1
// 1   + 2   -- 3
// 3   + 3   -- 6
// 6   + 4   -- 10




// 🦁🦁🦁 Topic 2: ADVANCED Array Methods 🦁🦁🦁
// Given this zoo data from around the United States, follow the instructions below. Use the specific array methods in the requests below to solve the problems.

const zooAnimals = [
    { animal_name: "Jackal, asiatic", population: 5, scientific_name: "Canis aureus", state: "Kentucky" },
    { animal_name: "Screamer, southern", population: 1, scientific_name: "Chauna torquata", state: "Alabama" },
    { animal_name: "White spoonbill", population: 8, scientific_name: "Platalea leucordia", state: "Georgia" },
    { animal_name: "White-cheeked pintail", population: 1, scientific_name: "Anas bahamensis", state: "Oregon" },
    { animal_name: "Black-backed jackal", population: 2, scientific_name: "Canis mesomelas", state: "Washington" },
    { animal_name: "Brolga crane", population: 9, scientific_name: "Grus rubicundus", state: "New Mexico" },
    { animal_name: "Common melba finch", population: 5, scientific_name: "Pytilia melba", state: "Pennsylvania" },
    { animal_name: "Pampa gray fox", population: 10, scientific_name: "Pseudalopex gymnocercus", state: "Connecticut" },
    { animal_name: "Hawk-eagle, crowned", population: 10, scientific_name: "Spizaetus coronatus", state: "Florida" },
    { animal_name: "Australian pelican", population: 5, scientific_name: "Pelecanus conspicillatus", state: "West Virginia" },
  ];
  
  /* 🦁 Request 1: .forEach() 🦁
  The zoos want to display both the scientific name and the animal name in front of the habitats. 
  - Use animalNames to populate and return the displayNames array with only the animal name and scientific name of each animal. 
  - displayNames will be an array of strings, and each string should follow this pattern: "name: {name}, scientific: {scientific name}"
  */

  function animalNames(arr){
    let displayNames = [];

    arr.forEach(function(item){
      return displayNames.push(`name: ${item.animal_name}, scientific: ${item.scientific_name}`)
    });
    return displayNames;
  }
  
  console.log(animalNames(zooAnimals));


// I refered to the array methods github assignment. 
// recieve an array in the function. no CB function so we only need the array we'll be grabbing key:values from. 
// create an empty array to push the specific key:values into. return that array inside that function, but outside of the .forEach method





  /* 🦁🦁🦁 Request 2: .map() 🦁🦁🦁
  The zoo needs a list of all their animal's names converted to lower case. 
  Using lowerCaseNames use .map() to create a new array of strings with the animal's names in lowercase and return the new array. 
  For example: ['jackal, asiatic', .....]
  */

  function lowerCaseNames(){
    const lowerCase = zooAnimals.map(function(item){
      return item['animal_name'].toLowerCase();
  });
  return lowerCase
  }
  
  console.log(lowerCaseNames());
  
  // don't need to create empty array. just make the name and set array name equal to .map
  // write in the array name. don't need to recieve an array 
  // remmeber, think of 'item' as the the loop going through each object/line in the array 
  // remember to return outside of the function too 







  /* 🦁🦁🦁 Request 3: .filter() 🦁🦁🦁
  The zoo is concerned about animals with a lower population count. 
  Using lowPopulationAnimals use .filter() to create a new array of objects which contains only the animals with a population of less than 5.
  */

  function lowPopulationAnimals(){
    const lowPopulation = zooAnimals.filter(function(item){
      return item.population < 5;
    });
    return lowPopulation;
  }
  
  console.log(lowPopulationAnimals());

  // remember... with .filter, if the function is true, it'll be returned into the new array
  // returns new array without us having to make an empty one just like with .map








  /* 🦁🦁🦁 Request 4: .reduce() 🦁🦁🦁
  The zoo needs to know their total animal population across the United States. 
  Using USApop find the total population from the zoos array using the .reduce() method. 
  Remember the reduce method takes two arguments: a callback (which itself takes two args - the accumulator and the item), and an initial value for the count.
  */

  function USApop(){
    const totalPop = zooAnimals.reduce(function(accumulator, item){
      return accumulator + item.population;
    },0);
    return totalPop;
  }
  
console.log(USApop());


  // remember, .reduce returns a single value.
  // must do accumulator + item.w/e key
  // initial value is 0 bc you're adding. so the accumulator starts at 0. it'll loop through each item/line/object in the array and add each number until it's all added up. that's what will return to you. so accumulator starts at 0 bc you set it to 0, it'll add the first item's population, 5 + 0. so now the accumulator is 5 and it'll add the next item's population, etc. and it'll return the final number 









  // 🦁🦁🦁 Callbacks 🦁🦁🦁  
  /* 🦁🦁🦁 Step 1: Create a higher-order function 🦁🦁🦁
    * Use the higher-order function consume with 3 parameters: a, b and cb
    * The first two parameters can take any argument (we can pass any value as an argument)
    * The last parameter accepts a callback
    * The consume function should return the invocation of cb, passing a and b into cb as arguments
  */

  function consume(a, b, cb){
    return cb(a, b);
  }

  //remember, the cb is below, and that'll be passed into the consume HOF
  // so when you console.log below, you're invoking the consume function and passing in the callback, which passes in the paramters a and b. 
  // the CB gets to decide what a and b and are what they do 
  // the HOF lets us have a common format to use 




  /* 🦁🦁🦁 Step 2: Create several functions to callback with consume(); 🦁🦁🦁 */ //so these are CB's


 // 🦁Use add to return the sum of two numbers🦁
function add(a, b){
    return a + b;
  }
console.log(consume(7,5,add)); //pass the 'add' cb into the HOF. follow the HOF param format



// 🦁Use multiply to return the product of two numbers🦁
function multiply(a, b){
   return a * b;
  }
  console.log(consume(2, 5, multiply));



 // 🦁Use greeting to accept a first and last name and return "Hello {first-name} {last-name}, nice to meet you!"🦁

 function greeting(a, b){
   return `Hello ${a} ${b}, nice to meet you!`;
  }
  console.log(consume('Victoria', 'B.', greeting));
  
  // i can name the parameters anything I want, I just wanted to try it out with a and b like above.





  // 🦁🦁🦁 Step 3: Check your work by un-commenting the following calls to consume(): 🦁🦁🦁 
  // ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
  console.log(consume(2, 2, add)); // 4
  console.log(consume(10, 16, multiply)); // 160
  console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


  // yay they all work :)








// 🐴🐴🐴 Topic 3: Prototypes 🐴🐴🐴 //
//🐴🐴🐴 Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge. 🐴🐴🐴


/* 🐴🐴🐴 Step 1: Base Constructor 🐴🐴🐴
 Use the constructor function named CuboidMaker to accept properties for length, width, and height which can be initialized as an object --
*/
function CuboidMaker(attrib){
  this.length = attrib.length;
  this.width = attrib.width;
  this.height = attrib.height;
}



// remember: ".prototype - allows us to abstract our methods out of our objects so that the object is not painted every time invocation occurs but it is still accessible across thousands of objects"




/* 🐴🐴🐴 Step 2: Volume Method 🐴🐴🐴
  Create a method called volume using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  Formula for cuboid volume: length * width * height   */

CuboidMaker.prototype.volume = function(){
  return (this.length * this.width * this.height);
};


/* 🐴🐴🐴 Step 3: Surface Area Method 🐴🐴🐴
  Create another method called surfaceArea using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  Formula for cuboid surface area of a cube: 
  2 * (length * width + length * height + width * height)  */

CuboidMaker.prototype.surfaceArea = function(){
  return (2*((this.length * this.width) + (this.length * this.height) + (this.width * this.height)));
};



/* 🐴🐴🐴 Step 4: Create a new object that uses CuboidMaker 🐴🐴🐴
  Create an object called cuboid that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid. */

// // don't make a Child unless you're going to add different attributes to the Child
  // function Child(attrib){
  //   CuboidMaker.call(this, attrib);
  // }
  // Child.prototype = Object.create(CuboidMaker.prototype);

const cuboid = new CuboidMaker({    //object using CubiodMaker CF
  length: '4',
  width: '5',
  height: '5'
});

// // make sure object works
// console.log(cuboid);


// 🐴🐴🐴 Test your volume and surfaceArea methods by uncommenting the logs below: 🐴🐴🐴
// ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
 








// 🦄🦄🦄 Topic 4: Classes 🦄🦄🦄 //
//🦄🦄🦄 1. Take your prototypes from above and refactor into class syntax. Please rename your class CuboidMakerTwo and your object cuboidTwo 🦄🦄🦄
class CuboidMakerTwo{     // I'm initializing with an object again
  constructor(attrib){
  this.length = attrib.length;
  this.width = attrib.width;
  this.height = attrib.height;
}
volume(){
  return (this.length * this.width * this.height);
}
surfaceArea(){
  return (2*((this.length * this.width) + (this.length * this.height) + (this.width * this.height)));
}
}

//object
const cuboidTwo = new CuboidMakerTwo({
  length: '4',
  width: '5',
  height: '5'
});



//🦄🦄🦄 Test your volume and surfaceArea methods by uncommenting the logs below: 🦄🦄🦄
console.log(cuboidTwo.volume()); // 100
console.log(cuboidTwo.surfaceArea()); // 130









  


  /* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
  function foo(){
    console.log('its working');
    return 'bar';
  }
  foo();
  module.exports = {
    foo,
    summation,
    animalNames,
    lowerCaseNames,
    lowPopulationAnimals,
    USApop,
    consume, 
    add,
    multiply,
    greeting,
    CuboidMaker,
    CuboidMakerTwo
  }
