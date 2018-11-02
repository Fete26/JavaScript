/*var a = prompt("Please enter number");
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

/*reverse array
var a = [1,2,3,4,5];


function reverse_number(a){
  return a.reverse();
}

console.log(reverse_number(a));

*/

/*
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
*/

/*
var a = ["z","a","t"];
var b = a.sort();
console.log(b);
*/
/*
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
