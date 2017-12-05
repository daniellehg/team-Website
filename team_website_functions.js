<<<<<<< HEAD
<<<<<<< HEAD
  Today's Date


 function dateMessage();

=======
 < h1 > Today 's Date</h1> <
 script >
>>>>>>> origin/master
     function dateMessage();
 var today = new Date();
 var dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
 var day = today.getDay();
 var MonthArray = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 var month = today.getMonth();
 var date = today.getDate();
 var year = today.getFullYear();

 return (dayArray[day], ", ", MonthArray[month], " ", [date], ", ", [year]); <
 /script>

 function randomGreetings() {
     var greetings = ['Howdy!', 'Greetings!', 'Hola!', 'Bonjour!', 'Shalom!', 'hi'];
     var randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
     return randomGreeting;
 }
<<<<<<< HEAD
     function birthdaycountdown(d) {
     var today = new Date ();
     var bday = new Date(" ");
     bdate.setFullYear(today.getFullYear());
     var untilBD = today-bdate;
     if (untilBD < 0){
         var untilBD = new Date(year + 1, month, day)
         }
         return "There are only"days"days,"hours"hours,and"minutes"minutes until I turn seventeen years old"
     }



=======
var greetings = ['Howdy!', 'Greetings!', 'Hola!', 'Bonjour!', 'Shalom!', 'hi'];
        var rand = greetings[Math.floor(Math.random() * greetings.length)];
        document.write(rand);
=======
>>>>>>> origin/master
=======
function dateMessage();

function dateMessage();
var today = new Date();
var dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var day = today.getDay();
var MonthArray = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var month = today.getMonth();
var date = today.getDate();
var year = today.getFullYear();

return dayArray[day], ", ", MonthArray[month], " ", [date], ", ", [year];

function greeting(d) {
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
        if (day == )
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
>>>>>>> origin/master
