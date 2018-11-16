//this is taking two numbers and checking if A is > than b and if A is a even number
var a = prompt("Please enter number");
console.log(a);

var b = 10;
var c = 20;

function checknumber()
{
  if (a > b && a % 2==0){
  window.alert("both condition work");
}
  else
  {
    window.alert("Both conditions are not met");
  }
}

checknumber(a,b);
*/

// We are reversing the array here
//reverse array
var a = [1,2,3,4,5];


function reverse_number(a){
  return a.reverse();
}

console.log(reverse_number(a));


// below is a const for an object. 

function person(firstName,lastName,age){
this.firstName = firstName;
this.lastName = lastName;
this.age = age;
};

var house1 =[
  new person ("Clayton","Fete",34),
  new person ("Erin","Fete", 37)
];

console.log(house1[0].firstName + " is married to " + house1[1].firstName + " and their lastname is " + house1[0].lastName);

function reverse_fete(house1[0]){
  return house1.reverse();
}
console.log(reverse_fete());


//below is sorting an arry and creating a function to sort a string notice join is by ","


var a = ["z","a","t"];
var b = a.sort();
console.log(b);


function sort_letter(str){
  var x = str.split("");
  return x.sort().join(",");
}

console.log(sort_letter("thdaqwewopvnccerikt"));

function join_str(str){
  var x = str.split("");
  return x.join("&");

}

console.log(join_str("dfghytf"));

//Cap  the first letter
var str1 = "Hello Clayton";

function cap_first(str){
var a = [];
var sep = str.split(" ");
for (var i=0; i<sep.length; i++){
  a.push(sep[i][0].toUpperCase()+sep[i].slice(1));
}
return a.join(" ");
}

console.log(cap_first("what am i"));

var t = "t,y,r,t,"
var t2 = t.join("& ");
console.log(t2);

*/

function person(firstName,lastName,age){
this.firstName = firstName;
this.lastName = lastName;
this.age = age;
};

var house1 =[
  new person ("Clayton","Fete",34),
  new person ("Erin","Fete", 37)
];
console.log(house1.length);

function games(title,genre,rating,price){
  this.title=title;
  this.genre = genre;
  this.rating = rating;
  this.price = price;
  this.info = function(){return "This game title is " + this.title + " and it is an "+ this.genre};
  
  }
  //new constructor then taking the array and sorting by title
  var xboxGames = [
      new games  ("Witcher 3","RPG","M",60),
      new games  ("Mass Effect","RPG","M",76),
      new games ("Read Dead","SandBox","M",100)
  ];
  
  console.log(xboxGames[2].info());
  
  var xboxGames2 = xboxGames.reverse();
  
  console.log(xboxGames2);
  
  function sort_xbox(){
  return xboxGames.sort();
  }
  console.log(sort_xbox(xboxGames.price));
  
  var s = xboxGames.sort();
  console.log(s);
  
  xboxGames.sort(function(a, b){
      if(a.title < b.title) { return -1; }
      if(a.title > b.title) { return 1; }
      return 0;
  })

 


  //.push() allows us to add items to an array.
  let movies = ['Star Wars', 'Spider=man', 'District 9'];
  console.log(movies);
  movies.push("Star Trek, Ironman");

  //.pop removes the lat item of an array. .pop() does not take any arguments, it simply removes the last element of newItemTracker.

  let movies = ['Star Wars', 'Spider=man', 'District 9'];
  movies.pop();
  console.log(movies);


  //function to add item.
  const flowers = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
  arr.push('lily');
}

addFlower(flowers);

console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']


//function that can change arrays
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

function removeElement(newArr){
  newArr.pop();
}

removeElement(concept);
console.log(concept);

//have a  for loop count backwords 

for (let counter = 3; counter >= 0; counter--){
  console.log(counter)
};

// for loops 
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for(let i=0;i<vacationSpots.length;i++){
  console.log('I would love to vist ' + vacationSpots[i]);
}

//nested loops 
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};

let bobsFollowers = ["Clay","Erin","Cora","Dan"];

let tinasFollowers = ["Clay","Bill","Erin"];

let mutualFollowers = [];

for(i=0; i<bobsFollowers.length; i++){
  for(j=0; j<tinasFollowers.length; j++){
   if(bobsFollowers[i] === tinasFollowers[j]) {
     console.log('Bob and Tina share the same follwers ' + tinasFollowers[j])
   }
    
  }
};

//pushing shared values in a empty array
// Write your code below
let bobsFollowers = ["Clay","Erin","Cora","Dan"];

let tinasFollowers = ["Clay","Bill","Erin"];

let mutualFollowers = [];

for(i=0; i<bobsFollowers.length; i++){
  for(j=0; j<tinasFollowers.length; j++){
   if(bobsFollowers[i] === tinasFollowers[j]) {
     mutualFollowers.push(tinasFollowers[j])
   }
    
  }
};

console.log(mutualFollowers);

//while loops with an array
const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while(currentCard != 'spade'){
  currentCard = cards[Math.floor(Math.random()*4)];
console.log(currentCard);
}
//break statement
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write break statement code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] ===  'Notorious B.I.G.'){
    break;
  }
}
console.log("And if you don't know, now you know.");
//remeber for each methods.
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(function(eatfruits){
  console.log("I want to eat " +  eatfruits);
  
});

//.map() also this take the first chac in all the strings
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage =animals.map(animals => {
  return animals.charAt(0);
})


//using .map() to create new array and divide numbers.
const smallNumbers = bigNumbers.map(bigNumbers =>{
  return bigNumbers / 100;
  
});

console.log(smallNumbers);

//filter
'const smallNumber = randomNumbers.filter(randomNumbers =>{
  return randomNumbers < 250;
  
})

console.log(smallNumber);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(favoriteWords =>{
  return favoriteWords.length > 7;
})

console.log(longFavoriteWords);
