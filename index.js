function clock(){
                
   var monthNames = [ "january" , "february" , "march" , "april" , "may" , "june" , "july" , "august" , "september" , "october" , "november" , "december"];
   var dayNames = [ "Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"];

   var today = new Date();
   document.getElementById('Date').innerHTML = (dayNames[today.getDay()] + '  ' + today.getDate() + '  ' + monthNames[today.getMonth()] + '  ' + today.getFullYear()); 

//    document.getElementById('Date').innerHTML = (dayNames[today.getDay()] + " " + 
//    today.getDate() + ' ' + monthNames[today.getMonth()] + ' ' +today.getFullYear());

   var h = today.getHours();
   var m = today.getMinutes();
   var s = today.getSeconds();
   var day = h<11 ? 'AM' : 'PM';


   h = h<10? '0'+h: h;
   m = m<10? '0'+m: m;
   s = s<10? '0'+s: s;


   document.getElementById('hours').innerHTML = h;
   document.getElementById('minutes').innerHTML = m;
   document.getElementById('seconds').innerHTML = s;



}var inter = setInterval(clock,400);