

<<<<<<< HEAD
function dateMessage(){
var today = new Date();
var dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var day = today.getDay();
var MonthArray = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var month = today.getMonth();
var date = today.getDate();
var year = today.getFullYear();
if (date == 0 || date == 20 || date == 30) {

    DateSuffix = "st";
}

return dayArray[day], ", ", MonthArray[month], " ", [date], ", ", [year]
}

function randomGreetings() {
    var greetings = ['Howdy!', 'Greetings!', 'Hola!', 'Bonjour!', 'Shalom!', 'hi'];
    var randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    return randomGreeting;
} <<
<< << < HEAD

function birthdaycountdown(d) {
    var today = new Date();
    var bday = new Date(" ");
    bdate.setFullYear(today.getFullYear());
    var untilBD = today - bdate;
    if (untilBD < 0) {
        var c = new Date(year + 1, month, day)
    }
}
=======


 function greeting(d) {
    var hour = d.getHours();
    var day = d.getDay();
    if (day == 6 || day == 0) {

    }
}
     function birthdaycountdown(d) {
     var today = new Date ();
     var bday = new Date(" ");
     bdate.setFullYear(today.getFullYear());
    var untilBD = today-bdate;
     if (untilBD < 0){
         var c = new Date(year + 1, month, day)
         }

