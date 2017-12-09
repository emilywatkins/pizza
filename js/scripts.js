function Pizza(size, meat, veg, side) {
  this.size = size;
  this.meat = meat;
  this.veg = veg;
  this.side = side;
};

Pizza.prototype.calculate = function(pizzaPrice) {
  
}

$(document).ready(function() {
  $("#order").submit(function(event) {
    event.preventDefault();
    $(".result").empty();

    var pizzaPrice = 5;

    var inputSize = $("#size").val();
    var inputMeat = $("input:checkbox[name=meat]:checked").val();
    var inputVeg = $("input:checkbox[name=veg]:checked").val();
    var inputSide = $("#side").val();
    console.log(inputMeat);

  })
})
