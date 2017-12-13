function dateMessage() {
    var today = new Date();
    var dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var day = today.getDay();
    var MonthArray = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var month = today.getMonth();
    var date = today.getDate();
    var year = today.getFullYear();

    if (date == 1 || date == 21 || date == 31) {
        dateSuffix = "st";
    } else if (date == 2 || date == 22) {
        dateSuffix = "nd"
    } else if (date == 3 || date == 23) {
        dateSuffix = "rd"
    } else {
        dateSuffix = "th";
    }

    return dayArray[day] + ", " + MonthArray[month] + " " + [date] + [dateSuffix] + ", " + [year];
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
            return "Good Morning!";
        }
    }
    if (hour > 12 && hour < 17) {
        if (day == 6 || day == 0) {
            return "Hope you are having a great weekend!";
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

function addYear(d) {
    var y = d.getFullYear();
    y = y + 1;
    d.setFullYear(y);
    return d;
    }

function birthdayCountdown(b) {
    var today = new Date();
    var yearsold = Math.floor((today.getTime() - b.getTime()) / 31556900000);

    b.setFullYear(today.getFullYear());

    var untilBD = b - today;

    var newbirthday = new Date();

    if (untilBD < 0) {
         newbirthday = addYear(b);
     }


                var days = Math.floor((newbirthday.getTime() - today.getTime()) / 86400000);

    return "There are only " + days + " days until I turn " + yearsold + " years old!"
    }
