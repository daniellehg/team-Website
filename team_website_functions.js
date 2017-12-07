
function dateMessage(){
var today = new Date();
var dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var day = today.getDay();
var MonthArray = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var month = today.getMonth();
var date = today.getDate();
var year = today.getFullYear();
<<<<<<< HEAD
if(date == )

=======
>>>>>>> origin/master

return dayArray[day], ", ", MonthArray[month], " ", [date], ", ", [year];
}

function greeting() {
    var d = new Date();
    var hour = d.getHours();
    var day = d.getDay();
    if (hour < 12) {
        if (day == 0 || day == 6) {
            return "Go back to sleep, it's the weekend!";
        } else if (day == 1) {
            return "Ugh, it's monday morning!";
        } else {
            return "Good Morning!"
        }
    }
    if (hour > 12 && hour < 17) {
        if (day == 6 || day == 0) {
            return "Hope you are hving a great weekend!";
        } else {
            return "Good Day!";
        }
    }
    if (hour > 17) {
        if (day == 0) {
            return "Enjoy your evening...tomorrow is Monday!";
        } else {
            return "Good Evening!";
        }
    }
}

function birthdaycountdown(d) {
    var today = new Date();
    var bday = new Date(" ");
    bdate.setFullYear(today.getFullYear());
    var untilBD = today - bdate;
    if (untilBD < 0) {
        var c = new Date(year + 1, month, day)
    }
