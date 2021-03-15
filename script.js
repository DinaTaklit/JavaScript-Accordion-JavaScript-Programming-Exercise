const accordion = document.querySelectorAll('.panel');
console.log(accordion);
accordion.forEach((element) => {
    // console.log(element);
    element.addEventListener('click', toggleElement)
});


 function toggleElement(e) {
    // console.log(e); //display the event
    // console.log(this); // display the parent element panel
    //console.log(e.target); // display the clicked element if the head the head if the body will /displau the body
    //  Hide all open panels => The long way
    /*  accordion.forEach(function(ele){
        ele.classList.remove('active');
    })*/
    //  Hide all open panels => The short way
    const allActivpanels = document.querySelectorAll('.active');
    allActivpanels.forEach(element => element.classList.remove('active'));
    this.classList.toggle("active"); // Toggle Active Class
}
