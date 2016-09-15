var loginEl = document.getElementById('login');

function createLoginForm(repeat){
  var user= '';

  if(repeat){
    var user = localStorage.getItem('username');
  }

var loginForm =
    '<form>' +
    '<label for = "user">Username:' +
    '<input type="text" id="user" value=" " + user + " " >' +
      '</label>' +
      '<label for ="pass">Password:' +
    '<input type="password" id="pass">' +
    '</label>' +

    '<input type="submit" id="submit">' +
    '</form>' ;
    loginEl.innerHTML = loginForm;


var form = document.querySelector('form'),
  submitBtn = document.querySelector('input[type="submit"]');

return;


function setStorage(e) {
    e.preventDefault();

    localStorage.setItem('username', form.elements.user.value);
    localStorage.setItem('password', MD5(form.elements.pass.value));

}

function checkStorage(e){
  e.preventDefault();

  if(MD5(form.elements.pass.value) === localStorage.getItem('password')){
    alert('Access Granted');

  }else{
    alert('Please check your password');
  }
}
if(!localStorage.getItem('username') &&
 !localStorage.getItem('password')){
    createLoginForm(false);
    alert('Please enter a username and password to proceed');
    var form = document.querySelector('form'),
      submitBtn = document.querySelector('input[type="submit"]');
   submitBtn.addEventListener('click', setStorage);

}else if(localStorage.getItem('username') && localStorage.getItem('password')){
  createLoginForm(true);
  alert('Welcome back ' +localStorage.getItem('username')+'. Please enter your password to continue');

  var form = document.querySelector('form'),
    submitBtn = document.querySelector('input[type="submit"]');
  submitBtn.addEventListener('click', checkStorage);

}
}
