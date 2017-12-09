function Pizza(size, meat, veg) {
  this.size = size;
  this.meat = meat;
  this.veg = veg;
};

Pizza.prototype.sizePrice = function(pizzaPrice) {
  if (this.size === "Small") {
    pizzaPrice += 1;
  } else if (this.size === "Medium") {
    pizzaPrice += 2;
  } else if (this.size === "Large") {
    pizzaPrice += 3;
  }
  return pizzaPrice;
};

Pizza.prototype.toppingsPrice = function(countMeat, countVeg) {
  return (countMeat * 2) + countVeg;
};

Pizza.prototype.addMeat = function(inputMeat) {
  this.meat.push(inputMeat);
}

Pizza.prototype.addVeg = function(inputVeg) {
  this.veg.push(inputVeg);
}

$(document).ready(function() {
  $("#order").submit(function(event) {
    event.preventDefault();
    $(".result").empty();

    var pizzaPrice = 5;

    var inputSize = $("#size").val();
    var countMeat = $(".meat:checked").length;
    var countVeg = $(".veg:checked").length;
    var inputMeat = $(".meat:checked").val();
    var inputVeg = $(".veg:checked").val();

    var pizza = new Pizza(inputSize, [], [])


    var totalPrice = pizza.toppingsPrice(countMeat, countVeg) + pizza.sizePrice(pizzaPrice);

    console.log(pizza.meat);
    $(".meat:checked").each(function() {
      var inputMeat = $(this).val();
      pizza.addMeat(inputMeat);
    });

    $(".veg:checked").each(function() {
      var inputVeg = $(this).val();
      pizza.addVeg(inputVeg);
    });

    $(".result").append("<div id='resultDetails'>" + "<h2><u>Order summary</u></h2>" +
                        "<h4>" + inputSize + " pizza </h4>" +
                        "<h4>Total price: $" + totalPrice + "</h4>" +
                        "<h4>Toppings: </h4><h5>" + (pizza.meat.concat(pizza.veg)).join(", ") + "</h5>" + "</div>");
  });
});
