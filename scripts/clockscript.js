var span = document.getElementById('date');

var d = new Date();
var date = d.getDate();
var month = d.getMonth() + 1; 
var year = d.getFullYear();
span.textContent = date + "/" + month + "/" + year;

var span = document.getElementById('time');
function time() {
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    span.textContent = h + ":" + m + ":" + s;
    }
setInterval(time, 1000);


