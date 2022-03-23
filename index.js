$('#a-name').hover(function(){
    $(this).text("About");
}, function() {
    $(this).text("Jon Lindsey");
});

$('h3').hover(function(){
    $(this).text("Full Stack Designer Who Loves to Create");
}, function() {
    $(this).text("User Experience, User Interface and Web Development ");
});

// $("#slide").mouseover(function(){
//   $("#panel").show(10);
//     $("#chicago-sun-times-image").hide(1);       
// });

// $("#slide").mouseleave(function(){
//   $('#chicago-sun-times-image').show(1);
//     $("#panel").hide(1);
// });

$("#slide, #slide-four").hover(function(){
  $(this).find("#panel, #panel-four").stop().toggle("slow");
});

// $("#slide-two").mouseover(function(){
//   $("#panel-two").fadeIn(10);
//     $("#gig-image").hide(1);       
// });

// $("#slide-two").mouseleave(function(){
//   $('#gig-image').fadeIn(1);
//     $("#panel-two").hide(1);
// });

// $("#slide-three").mouseover(function(){
//     $("#panel-three").fadeIn(10);
//       $("#eaynotes-image").hide(1);       
//   });
  
//   $("#slide-three").mouseleave(function(){
//     $('#eaynotes-image').fadeIn(1);
//       $("#panel-three").hide(1);
//   });
