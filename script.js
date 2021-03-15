const accordion = document.querySelectorAll('.panel');
console.log(accordion);

accordion.forEach((element) => {
    // console.log(element);
    element.addEventListener('click', toggleElement);
    element.addEventListener('mouseenter', addStyle1);
    element.addEventListener('mouseover', addStyle2);
});


// Style Functions
function addStyle1 (e) {
    e.target.style.color = "red";
    setTimeout(function(){
        e.target.style.color ='';
    }, 500)
}

function addStyle2(e){
    e.target.style.color  = 'orange';
    setTimeout(function(){
        e.target.style.color ='';
    }, 500)
}



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

// ANother solution
function toggleEle(e) {
  console.log(e.target.parentElement);
  accordion.forEach(function (ele) {
    if (e.target.parentElement === ele) {
      ele.classList.toggle('active');
    }
    else {
      ele.classList.remove('active');
    }
  })
}