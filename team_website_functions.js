<<<<<<< HEAD
  Today's Date


 function dateMessage();

=======
 < h1 > Today 's Date</h1>
>>>>>>> origin/master
     function dateMessage();
 var today = new Date();
 var dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
 var day = today.getDay();
 var MonthArray = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 var month = today.getMonth();
 var date = today.getDate();
 var year = today.getFullYear();

 return dayArray[day], ", ", MonthArray[month], " ", [date], ", ", [year]

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
         var c = new Date(year + 1, month, day)
         }



=======
var greetings = ['Howdy!', 'Greetings!', 'Hola!', 'Bonjour!', 'Shalom!', 'hi'];
        var rand = greetings[Math.floor(Math.random() * greetings.length)];
        document.write(rand);
=======
>>>>>>> origin/master
