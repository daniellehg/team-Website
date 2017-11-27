 < h1 > Today 's Date</h1> <
 script >
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
