function btnOnClick(event) {
    var emailElement = document.getElementById("email");
    var messElement = document.getElementById("mess");

    if (emailElement.value === "") {
        var errorEmail = document.getElementById("error-email");
        errorEmail.innerHTML = "Please enter your Email!";
        event.preventDefault();
    }
    if (messElement.value ==="" || messElement.value.length < 128) {
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
    errorMess.innerHTML = "";
}
