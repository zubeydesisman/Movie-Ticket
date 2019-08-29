// Business Logic for Ticket -------
function Ticket(movieName, movieTime,age) {
  this.movieName = movieName,
  this.movieTime = movieTime,
  this.age = age,
  this.price = 20
}
// var newTicket = new Ticket(inputtedMovieName, inputtedMovieTime, inputtedAge);
// newTicket.calculatePrice();
// console.log(newTicket.price);


Ticket.prototype.calculatePrice = function() {
  if(this.movieName === "Spiderman" && (this.movieTime === "2pm" || this.movieTime === "8pm") && (this.age ==="kid" || this.age === "adult")){
    this.price = 30;
  }else if (this.movieName === "Spiderman" && (this.movieTime === "10am" && this.age !== "senior")) {
    this.price = 25;
  }else if (this.movieName !== "Spiderman"  && this.movieTime !== "10am" && this.age === "senior") {
    this.price = 15;
  }else if (this.movieName !== "Spiderman"  && this.movieTime == "10am" && this.age === "senior") {
    this.price = 10;
  }
}
//user interface logic-----
$(document).ready(function() {
  $("form#movies").submit(function(event) {
    event.preventDefault();
    var inputtedMovieName = $("input:radio[name=movie]:checked").val();
    var inputtedMovieTime = $("input:radio[name=movieTime]:checked").val();
    var inputtedAge = $("input:radio[name=age]:checked").val();
    console.log(inputtedAge);

    var newTicket = new Ticket(inputtedMovieName, inputtedMovieTime, inputtedAge);
    newTicket.calculatePrice();
    console.log(newTicket.price);


    var finalPrice = newTicket.price;
    $(".finalprice").text(finalPrice);
    $("#result-price").show();
  });
});
