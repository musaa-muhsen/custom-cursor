let mouseCursor = document.querySelector('.cursor');
let navLinks = document.querySelectorAll(".nav-links li");

window.addEventListener('mousemove', cursor);


function cursor(event) {
    //console.log(event);
    mouseCursor.style.left = event.pageX + "px";
    mouseCursor.style.top = event.pageY + "px";
}

navLinks.forEach(link => {
    link.addEventListener('mouseover' , () => {
        mouseCursor.classList.add("link-grow");
        link.classList.add('hovered-link');
    });

    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("link-grow");
        link.classList.remove('hovered-link');


    })
})