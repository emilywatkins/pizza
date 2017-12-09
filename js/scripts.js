function Pizza(size, meat, veg) {
  this.size = size;
  this.meat = meat;
  this.veg = veg;
};

Pizza.prototype.sizePrice = function(pizzaPrice) {
  if (this.size === "small") {
    pizzaPrice += 1;
  } else if (this.size === "medium") {
    pizzaPrice += 2;
  } else if (this.size === "large") {
    pizzaPrice += 3;
  }
  return pizzaPrice;
};

Pizza.prototype.toppingsPrice = function(pizzaPrice) {

};

$(document).ready(function() {
  $("#order").submit(function(event) {
    event.preventDefault();
    $(".result").empty();

    var pizzaPrice = 5;

    var inputSize = $("#size").val();
    var inputMeat = $(".meat:checked").length;
    var inputVeg = $(".veg:checked").length;

    var adjustedPrice = new Pizza(inputSize, )
    console.log(inputMeat);

  })
})
