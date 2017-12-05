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

 return dayArray[day], ", ", MonthArray[month], " ", [date], ", ", [year]; <
 /script>

 function greeting(d) {
    var hour = d.getHours();
    var day = d.getDay();
    if (day == 6 || day == 0) {
        if(hour >) {
            return "Go back to sleep! Its the weekend!";
        } else if (day == 1) {
            return "Ugh, its a Monday monring!";
        } else {
            return "Good morning!";
        }
    } else if (hour < 18) {
        return "Good day.";
    } else {
        return "Good evening!";
    }
}
<<<<<<< HEAD
     function birthdaycountdown(d) {
     var today = new Date ();
     var bday = new Date(" ");
     bdate.setFullYear(today.getFullYear());
    var untilBD = today-bdate;
     if (untilBD < 0){
         var c = new Date(year + 1, month, day)
         }



=======
var greetings = ['Howdy!', 'Greetings!', 'Hola!', 'Bonjour!', 'Shalom!', 'hi'];
        var rand = greetings[Math.floor(Math.random() * greetings.length)];
        document.write(rand);
=======
>>>>>>> origin/master
