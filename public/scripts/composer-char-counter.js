// $(document).ready(function() {
  
//   $("#tweet-text").keyup(function(event) {
//     const val = event.target.value
//     console.log("This is a test", val.length)
//   })

// });
// //console.log($(document).ready);
// var maxLength = 100;
// $('textarea').keyup(function() {
//   var length = $(this).val().length;
//   var length = maxLength-length;
//   $('#chars').text(length);
// });




$(document).ready(function() {
  $("#tweet-text").keyup(function() {  
    let maxLength = 140;
    let length = $(this).val().length;
    length = maxLength-length;
    $("#tweet-text").text(length)
    console.log(length);
  })
  
}); 

