const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active'); // Show the menu
        close.style.display = 'block'; // Show close icon
        bar.style.display = 'none'; // Hide hamburger icon
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active'); // Hide the menu
        close.style.display = 'none'; // Hide close icon
        bar.style.display = 'block'; // Show hamburger icon
    });
}

/*single product*/ 

var main=document.getElementById("main");
var small=document.getElementsByClassName("small-img");

small[0].onclick=function()
{
    main.src=small[0].src;
}
small[1].onclick=function()
{
    main.src=small[1].src;
}
small[2].onclick=function()
{
    main.src=small[2].src;
}
small[3].onclick=function()
{
    main.src=small[3].src;
}