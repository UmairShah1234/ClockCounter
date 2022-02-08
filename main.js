// current time
setInterval(()=>{
    const currentTime = new Date()
    const currentDate = currentTime.getDate();
    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentSeconds = currentTime.getSeconds();
    document.getElementById("days1").innerHTML = currentDate;
    document.getElementById("hours1").innerHTML = currentHours;
    document.getElementById("minutes1").innerHTML = currentMinutes;
    document.getElementById("second1").innerHTML = currentSeconds;
   
},1000)

//new year
const newYears = "1 Jan 2023";
function countdown(){
    const newyearDate = new Date(newYears);
    const currentDate = new Date;
    const totalSeconds = (newyearDate - currentDate)/1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 ) % 24;
    const minutes = Math.floor(totalSeconds / 60 ) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
}
countdown();
setInterval(countdown , 1000);

//birthday
const birthDate = "7 Nov 2022";
    function dateCount(){
    const newBirthDate = new Date(birthDate);
    const currentDate = new Date;
    const totalSeconds = (newBirthDate - currentDate)/1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 ) % 24;
    const minutes = Math.floor(totalSeconds / 60 ) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    document.getElementById("days2").innerHTML = days;
    document.getElementById("hours2").innerHTML = hours;
    document.getElementById("minutes2").innerHTML = minutes;
    document.getElementById("second2").innerHTML = seconds;
}
dateCount();
setInterval(dateCount,1000);

//carousel
var slideIndex = 1;
changeSlide(slideIndex);
function btn(n){
    changeSlide(slideIndex += n);
}
function changeSlide(n){
    var slide = document.getElementsByClassName("slide");
    console.log(slide);
    if (n > slide.length){
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = slide.length;
    }
    for (var i = 0 ; i < slide.length ; i++){
        slide[i].style.display = "none";
    }
    slide[slideIndex-1].style.display = "flex";

}

