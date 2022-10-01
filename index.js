//Cursor in vanilla js
const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    cursor.setAttribute('data-fromTop', (cursor.offsetTop - scrollY))
    cursor.setAttribute('data-fromSide', (cursor.offsetSide - scrollX))
});
window.addEventListener('scroll', () => {
    const fromTop = parseInt(cursor.getAttribute('data-fromTop'));
    cursor.style.top = scrollY + fromTop + 'px';
    const fromSide = parseInt(cursor.getAttribute('data-fromSide'));
    cursor.style.left = scrollY + fromSide + 'px';
});

window.addEventListener('click', () => {
    if (cursor.classList.contains('click')) {
        cursor.classList.remove('click');
        // Triggering a Dom Reflow
        void cursor.offsetWidth;
        cursor.classList.add('click');
    } else {
        cursor.classList.add('click')
    }
})

//Hover over my work and it shows what softwares I used to create it
$(".square-one").hover(function (){
    $("#image-one, .text-one").toggle();
});
$(".square-two").hover(function (){
    $("#image-two, .text-two").toggle();
});
$(".square-three").hover(function (){
    $("#image-three, .text-three").toggle();
});
$(".square-four").hover(function (){
    $("#image-three, .text-three").toggle();
});
