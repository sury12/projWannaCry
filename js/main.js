//update
var day = new Date().getDate();
var month = new Date().getMonth();
var year = new Date().getFullYear();

//PAYMENT WILL BE RAISED ON ___
var elDateToRaise = document.getElementById('datetoraise')
day +=3;
month +=1;
elDateToRaise.textContent = month + "/" + day + "/" + year;

//FILES WILL BE LOST ON ___
var elDateToLoose = document.getElementById('datetoloose')
day +=4;
elDateToLoose.textContent = month + "/" + day + "/" + year;


//COUNTDOWN 1
var countDownDate1 = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate() + 3,
  0,
  47,
  55,
  0,
).getTime();

//COUNTDOWN 2
var countDownDate2 = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate() + 7,
  0,
  47,
  55,
  0,
).getTime();


// DOM Window - setInterval method calls a function or evaluates an expression at specified intervals (in milliseconds).
var countDownLoop = setInterval(function() {
  
  // Find the distance between now and the count down dates
  var distance1 = countDownDate1 - new Date().getTime();
  var distance2 = countDownDate2 - new Date().getTime();

  // Time calculations for days, hours, minutes and seconds
  var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));

  var hours = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance1 % (1000 * 60)) / 1000);

  // Output the result in an element with id="timeleft1"
  document.getElementById("timeleft1").innerHTML = days1 + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // Output the result in an element with id="timeleft2"
  document.getElementById("timeleft2").innerHTML = days2 + "d " + hours + "h " + minutes + "m " + seconds + "s ";


  // DOM Window - clearInterval() method clears a timer set with the setInterval() method.
  if (distance1 < 0) {
    document.getElementById("timeleft1").innerHTML = "EXPIRED";
	  if (distance2 < 0) {
		clearInterval(countDownLoop);
		document.getElementById("timeleft2").innerHTML = "EXPIRED";
	  }
  }
  

  
  
}, 100);


/* ///////////// ///////////// ///////////// */



