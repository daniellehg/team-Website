 <html> Today 's Date</html>
<<<<<<< HEAD

 function dateMessage();
=======
 script >
     function dateMessage();
>>>>>>> origin/master
 var today = new Date();
 var dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
 var day = today.getDay();
 var MonthArray = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 var month = today.getMonth();
 var date = today.getDate();
 var year = today.getFullYear();

 return dayArray[day] + ", ", MonthArray[month] + " ", [date] + ", ", [year]

<<<<<<< HEAD
 var greetings = ['Howdy!', 'Greetings!', 'Hola!', 'Bonjour!', 'Shalom!', 'hi'];
 var rand = greetings[Math.floor(Math.random() * greetings.length)];
 document.write(rand);
=======
<<<<<<< HEAD
     function birthdaycountdown(date){
     return date
 }
      var today= new Date();
      var birthday = new Date();
      var days = Math.floor((birthday.getTime() - today.getTime() / 86400000);

      var today = new Date();
      var lastday = new Date();
      var hours = Math.floor((birthday.getTime() - today.getTime()) / 3600000);

      var today = new Date();
      var lastday = new Date();
      var minutes = Math.floor((birthday.getTime() - today.getTime()) / 60000);







=======
var greetings = ['Howdy!', 'Greetings!', 'Hola!', 'Bonjour!', 'Shalom!', 'hi'];
        var rand = greetings[Math.floor(Math.random() * greetings.length)];
        document.write(rand);
>>>>>>> origin/master
>>>>>>> origin/master
