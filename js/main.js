function btnOnClick(event) {
    var emailElement = document.getElementById("email");
    var messElement = document.getElementById("mess");

    if (emailElement.value === "") {
        var errorEmail = document.getElementById("error-email");
        errorEmail.innerHTML = "Please enter your Email!";
        event.preventDefault();
    }
    if (messElement.value === "") {
        var errorMess = document.getElementById("error-mess");
        errorMess.innerHTML = "Please enter your messages!";
        event.preventDefault();
    }
    if (messElement.value.length > 128) {
        var errorMess1 = document.getElementById("error-mess");
        errorMess1.innerHTML = "Your messages over 128!"
        event.preventDefault();
    }
}
function inputEmail(){
    var errorEmail = document.getElementById("error-email");
    errorEmail.innerHTML="";
}
function inputMessage(){
    var errorMess = document.getElementById("error-mess");
    errorMess.innerHTML ="";
}
/*function nullValue() {
    document.getElementById("mess").focus();
    document.getElementById("mess").value=null();
}
*/

//Slide Images
var isPlaying = false;
var myIndex = 0;
carousel();

function carousel() {
  if (isPlaying) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
    	myIndex = 1;
    }
    x[myIndex-1].style.display = "block";
  }
  setTimeout(carousel, 2000);
}
function toggleSlideshow() {
    isPlaying = !isPlaying;
}
var div = document.getElementById("images");
div.addEventListener('click', function (event) {
    toggleSlideshow();
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
  	slideIndex = 1;
  }    
  if (n < 1) {
  	slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";
}