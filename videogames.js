function videogame(Title,date,Rating,Genre,views){
  this.Title = Title;
  this.date = date;
  this.Rating = Rating;
  this.Genre = Genre;
  this.views = views;
};
//Creating Object

var videogame = [
new videogame ("Mass Effect","02-14-08","Mature","RPG"),
new videogame ("Bioshock","04-15-15","Mature","Shooter"),
new videogame ("Witcher 3", "05-25-2015","Mature","RPG"),
new videogame ("Mario","05-12-2011","Everybody","Platform"),
new videogame ("Zelda","04-15-2017","Everbody","RPG"),
new videogame ("Halo","04-23-2018","Teen","Shooter")
];

console.log(videogame [3],[5].Title);
