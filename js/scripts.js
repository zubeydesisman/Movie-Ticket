// Business Logic for AddressBook ---------
function Price() {
  this.tickets = [];
  //this.currentId = 0
}

Price.prototype.findMovie = function(movie) {
  for (var i=0; i<this.tickets.length; i++) {
    if (this.tickets[i].movieName === $("#movieName").val()){
      return this.tickets[i];
      }
    }
  }

Price.prototype.findmovieTime = function(movietime) {
    for (var i=0; i<this.tickets.length; i++) {
      if (this.tickets[i].movieTime === $("#movieTime").val()){
        return this.tickets[i];
        }
      }
    }

 Price.prototype.findage = function(age) {
    for (var i=0; i<this.tickets.length; i++) {
      if (this.tickets[i].age === $("#age").val()){
        return this.tickets[i];
        }
      }
    }




// Business Logic for ticket ---------
function Ticket(movieName, movietime, age) {
  this.movieName = movieName,
  this.movietime = movietime,
  this.age = age
}
// User Interface Logic ---------

function displayticketPrice(priceToDisplay) {
  var price = $("#result-price");
  var htmlForPriceInfo = "";
  priceToDisplay.Ticket.forEach(function(price) {
  htmlForPriceeInfo += "<li id=" + place.id + ">" + place.location + " " + place.landmark + "</li>";
  });
  placesList.html(htmlForPriceInfo);
};
