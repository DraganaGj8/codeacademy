
var itemCount = 0;
var priceTotal = 0;

$('.add').click(function (){
  itemCount ++;

  $('#itemCount').text(itemCount).css('display', 'block');
  $(this).siblings().clone().appendTo('#cartItems').append('<button class="removeItem">Избриши</button>');

  var price = parseInt($(this).siblings().find('.price').text()); 
  priceTotal += price;
  $('#cartTotal').text("Вкупно: " + priceTotal + " денари");
}); 


$('.openCloseCart').click(function(){
  $('#shoppingCart').toggle();
});

$('#emptyCart').click(function() {
  itemCount = 0;
  priceTotal = 0;

  $('#itemCount').css('display', 'none');
  $('#cartItems').text('');
  $('#cartTotal').text("Вкупно: " + priceTotal + " денари");
}); 


$('#shoppingCart').on('click', '.removeItem', function(){
  $(this).parent().remove();  
  itemCount --;
  $('#itemCount').text(itemCount);


  var price = parseInt($(this).siblings().find('.price').text());
  priceTotal -= price;
  $('#cartTotal').text("Вкупно: " + priceTotal + " денари");

  if (itemCount == 0) {
    $('#itemCount').css('display', 'none');
  }
});

//scroll
$(document).ready(function() {
  $(".kontakt").click(function() {
       $('html, body').animate({
           scrollTop: $(".mapa").offset().top
       }, 1500);
   });
  });
  
  $(document).ready(function() {
  $(".doma").click(function() {
       $('html, body').animate({
           scrollTop: $(".third").offset().top
       }, 1000);
   });
  });

  $(document).ready(function() {
    $(".fa-luggage-cart").click(function() {
         $('html, body').animate({
             scrollTop: $(".third").offset().top
         }, 500);
     });
    });

    $(".rotate").textrotator({
      animation: "dissolve", 
      separator: ",",
      speed: 1000
    });
    

    