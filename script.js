const accordion = document.querySelectorAll('.panel');
console.log(accordion);
accordion.forEach((element) => {
    // console.log(element);
    element.addEventListener('click', toggleElement)
});


 function toggleElement(e) {
    // console.log(e); //display the event
    // console.log(this); // display the parent element panel
    console.log(e.target); // display the clicked element if the head the head if the body will displau the body
}

