// time stamp on screen

function clockTick() {
var date = new Date();
var n = date.toDateString();
var time = date.toLocaleTimeString();

document.getElementById('currentTime').innerHTML = n + ' ' + time;
}

setInterval(function(){clockTick();}, 10);


// greeting
if (clockTick < 12) {
  document.getElementById('greetings').innerHTML = 'Good Morning!';
} else if(clockTick >= 12 && clockTick <= 17){
  document.getElementById('greetings').innerHTML = 'Good Afternoon!';
} else {
  document.getElementById('greetings').innerHTML = 'Good Evening!';
}



  var x = 0;  ///keeps track of article numbers. Starts a 0.
  var s = []

function newEntry() {
  var d = document.getElementById("task").value;  ///feteches user input.
  s[x] = d;
  newEl();
	}

function newEl() {
  var para = document.createElement("p");
  var node = document.createTextNode(s[x]);
	para.appendChild(node);
  var element = document.getElementById("todo");
	element.appendChild(para);

  var bclose = document.createElement("button")///attempt at adding html button
  var bnode = document.createTextNode("-");
  bclose.appendChild(bnode);
	element.appendChild(bclose);
  bclose.onclick = function(){
    var parent = document.getElementById("todo");
		var child = para;
    x - x-1;
		parent.removeChild(child);
    parent.removeChild(bclose);
  };

  x = x+1;
}
