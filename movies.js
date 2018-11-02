function movies(title, release_date, rating){
if (!new.target) throw 'Moves() must be called with new';

this.title = title;
this.release_date = release_date;
this.rating = rating;
}

var bluray = [
  new movies ("Star Wars", 1977, "PG"),
  new movies ("Rogue One", 2016, "PG-13"),
  new movies ("Deadpool", 2016, "R"),
  new movies ("Avengers: Infinity War", 2018, "PG-13")
];

//console.log(bluray);

window.alert("My two favorite movies are " + bluray[1].title + " and " + bluray[3].title);


var games = [];

for (var i = 0; i <5; i++)
games.push(prompt("Please enter your favorite game"));
