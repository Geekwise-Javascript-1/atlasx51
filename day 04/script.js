// function hello() {
//   var msg = "hello";
//   world(msg);
//
//
// }
//
// function world(message) {
//   alert(message+"world");
// }
//
//
// hello();
//

// if (!String.prototype.trim) {
//   String.prototype.trim = function (u) {
//     return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
//   };
// }

function getUsername() {
  var user = prompt("what is your name?");
  user = checkUsername(user);



}

function craftMsg (u) {
  var msg = 'Welcome ';

  msg += formatUsername(u)
  msg += ' to my site';
  alert(msg);
  alertUser(msg);

}

function alertUser(){
  alert(m);



}

function formatUsername(first) {
  return first.charAt(0).toUpperCase() + first.toLowerCase().substr(1, first.length);

}
  getUsername();

function checkUsername(user) {
  var preparsed = user;
  user = parseInt(user);

  // preparsed = preparesed.trim();
  //
  // console.log(user);
  // console.log(preparsed);


  // add check for preparsed blank
  // add check for preparsed null
  // console.log( isNaN(user));
   if( !isNaN(user) || preparsed === null || preparsed === '') {
     alert('thats not a proper username');
     return;
   }
   preparsed = preparsed.trim();
   if(preparsed === ''){
     alert('thats not a proper username');
     return;
   }
   craftMsg(preparsed);

}



checkUsername();
