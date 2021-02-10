
var d = new Date(); 

var months= ["January",
             "February",
             "March",
             "April",
             "May",
             "June",
             "July",
             "August",
             "September",
             "October",
             "November",
             "December"]

var days = ["Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"];
var day = days[d.getDay()];
var minutes = (i) => {
if ( i < 10)
{
    i = "0" + i;
}
return i;
};

var hours = (i)=> {
    if (i> 12){
        i-= 12;
    }
    return i;
}
var dt= {time:hours(d.getHours()) + ":" + minutes(d.getMinutes()), day: days[d.getDay()], month:  months[d.getMonth()], date: d.getDate(), year: d.getFullYear()};

console.log(dt.time, dt.day, dt.month, dt.date, dt.year)
// var date = d.getDate();
// var trueDate = {time: time, day: d, month: mo, date: d.getDate(), year: d.getFullYear()};
// console.log(trueDate.time)


// var time = d.getHours() + ":" + d.getMinutes()

//On load, we want the page to return the time and date 

const holder = document.querySelector(".time");
const count = document.querySelector(".count");
const container = document.querySelector(".container");
const pass = document.querySelector(".input");
var counter = 0;




var checkTime = () => {

    d = new Date();
    dt= {time:hours(d.getHours()) + ":" + minutes(d.getMinutes()), day: days[d.getDay()], month: months[d.getMonth()], date: d.getDate(), year: d.getFullYear()};

    var time ="<span>"+ dt.time +" </span><br> "
    + dt.day + ", "
     + dt.month + " "
     + dt.date + " " 
     + dt.year;
     
    holder.innerHTML= time;
}



window.addEventListener("load", () => {
    checkTime();
    setInterval(function() {
        checkTime() }, 100);
     } );


container.addEventListener("click", () => {
    container.classList.toggle("passive");
    pass.classList.toggle("active");
})

window.addEventListener("keydown", (event) => {

        if(event.code == "Escape" && container.classList.contains("passive")) {
            container.classList.remove("passive");
            pass.classList.remove("active");}
});

// //Update the time and date every second setInterval
