//.findIndex
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animals =>{
  return animals ==='elephant';
});

console.log(foundAnimal);
console.log(animals[7]);

const startsWithS = animals.findIndex(animals =>{
  return animals.startsWith('s');
})

console.log(startsWithS);
console.log(animals[3]);

//helpful objects to add delte or modify
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
  // Write your code below
  
  spaceship.color = 'glorious gold';
  
  spaceship.numEngines = 9;
  
  delete spaceship['Secret Mission'];

  //getters
  const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    get fullName() {
      if (this._firstName && this._lastName){
        return `${this._firstName} ${this._lastName}`;
      } else {
        return 'Missing a first name or a last name.';
      }
    }
  }
  
  // To call the getter method: 
  person.fullName; // 'John Doe'

  //setters
  const person = {
    _age: 37,
    set age(newAge){
      if (typeof newAge === 'number'){
        this._age = newAge;
      } else {
        console.log('You must assign a number to age');
      }
    }
  };

  //getter and setter
  const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num){
      if(typeof num === "number" && num >= 0){
         this._numOfSensors = num;
      }
      else{
       console.log('Pass in a number that is greater than or equal to 0');
      }
      
      
    }
  };
  robot.numOfSensors = 4;
  console.log(robot.numOfSensors);

  //recursion
  let add = function(n){
    if(n<0){
      return 0;
    }
    else{
      return n + add(n-1);
    }
  }
  console.log(add(5));

