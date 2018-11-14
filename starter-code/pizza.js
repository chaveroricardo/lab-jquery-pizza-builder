// Write your Pizza Builder JavaScript in this file.

$(document).ready(function(){
  var pep = 0;
  var mush = 0;
  var gpep = 0;
  var sau = 0;
  var crus = 0;
  

  $(".btn-pepperonni").click(function(event){
    $(".pep").toggle("show")
    $(".btn-pepperonni").toggleClass("active")
    $('aside li:nth-child(1)').toggle("show")
    var pep = 1;
  })

  $(".btn-mushrooms").click(function(event){
    $(".mushroom").toggle("show")
    $(".btn-mushrooms").toggleClass("active")
    $('aside li:nth-child(2)').toggle("show")
  })

  $(".btn-green-peppers").click(function(event){
    $(".green-pepper").toggle("show")
    $(".btn-green-peppers").toggleClass("active")
    $('aside li:nth-child(3)').toggle("show")
  })

  $(".crust").removeClass("crust-gluten-free")
  $(".btn-crust").removeClass("active")

  $(".sauce").removeClass("sauce-white")
  $(".btn-sauce").removeClass("active")

  $(".btn-sauce").click(function(event){
    $(".sauce").toggleClass("sauce-white")
    $(".btn-sauce").toggleClass("active")
    $('aside li:nth-child(4)').toggle("show")
  })

  $(".btn-crust").click(function(event){
    $(".crust").toggleClass("crust-gluten-free")
    $(".btn-crust").toggleClass("active")
    $('aside li:nth-child(5)').toggle("show")
  })

  
  
})

// $(document).on('change',function(){

//   if ($(".pep").css('display') === 'none'){
//    alert("Está escondido");
//  }else{
//    alert("Si se ve");
//  }
// })