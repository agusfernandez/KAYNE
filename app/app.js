window.onload= document.querySelectorAll('.text-case')[0].style.display="none";
document.querySelectorAll('.text-dos')[0].style.display="none";
document.querySelectorAll('.text-tres')[0].style.display="none";
document.querySelectorAll('.text-four')[0].style.display="none";

function hacerClick(){
    var x = document.querySelectorAll('.text-case')[0];
    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
}

function hacerClickdos(){
  var x = document.querySelectorAll('.text-dos')[0];
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}

function hacerClickthree(){
  var x = document.querySelectorAll('.text-tres')[0];
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}

function hacerClickfour(){
  var x = document.querySelectorAll('.text-four')[0];
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}


//Get the button - back to the top
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
