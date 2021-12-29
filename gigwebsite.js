
//test
// $(function () {
//   alert('hello');
// });

//New to gig
(function () {
  $("#slide").slideToggle("slow");
});

$("#slide").mouseover(function(){
    $("#panel").slideToggle("slow");
  });
  
  //Slider
  // $(document).ready(() => {
  //   $('#slideshow .slick').slick({
  //     autoplay: true,
  //     dots: true,
  //     slidesToShow: 3,
  //     responsive: [{
  //     breakpoint: 750,
  //     settings: {
  //     slidesToShow: 1,
  //     }
  //   }]
  //   });
  // });

    $('#slideshow .slick').slick({
      autoplay: true,
      dots: true,
      slidesToShow: 3,
      responsive: [{
      breakpoint: 750,
      settings: {
      slidesToShow: 1,
      }
    }]
    });
  