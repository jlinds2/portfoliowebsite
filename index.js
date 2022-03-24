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

$("#slide, #slide-four").hover(function(){
  $(this).find("#panel, #panel-four").stop().toggle("slow");
});

