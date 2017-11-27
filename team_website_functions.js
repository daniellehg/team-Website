 < h1 > Today 's Date</h1>

 function dateMessage();
 var today = new Date();
 var dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
 var day = today.getDay();
 var MonthArray = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 var month = today.getMonth();
 var date = today.getDate();
 var year = today.getFullYear();

 return MonthArray[month]

 var greetings = ['Howdy!', 'Greetings!', 'Hola!', 'Bonjour!', 'Shalom!', 'hi'];
 var rand = greetings[Math.floor(Math.random() * greetings.length)];
 document.write(rand);
