$("#toggle").click(function() {
  $("#toggle-navbar").toggle(750);
});

        $(document).ready(() => {
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
});

  
