var Car = {
  make: 'nissan',
  model: 'xterra',
  year: 05,

};

console.log(Car.make);
Car.model = 'rubicon';

console.log(Car.model);

var person = new Object();

person.name = 'eric';
person.age = 26;
person.job ='developer';
person.sayName = function(){
  alert(this.name);
};

// var person2 = {
//   name: 'eric',
//   age: 32,
//   job: 'developer',
//   sayName: function(){
//     alert(this.name);
//   }
// };



// person2.sayName();


// factory pattern!!!
// function createPerson(name, age, job){
//   var p = new Object();
//   p.name = name;
//   p.age = age;
//   p.job = job;
//   p.sayName= function(){
//     alert(this.name);
//   };
//
//
// return p;
//
// }

// function Person(name, age, job){
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.sayName = function(){
//     alert(this.name);
//
//   };
//
//   var person1 = new Person('eric', 26, 'developer');
//   var person2 = new Person('bob', 32, 'developer');
//
//   console.log(person1.age);
//
//   person2.sayName();

var loginNum = 0;

function Login(user){
  this.user = user;
  this.build = build;


}
function build(){
  loginNum++;
  var login = document.getElementById('login');
  var h2 = document.createElement('h2'),
    form = document.createElement('form'),
    label = document.createElement('label'),
    input = document.createElement('input'),
    submit = document.createElement('input');

    h2.textContent = 'Welcome '+ this.user +' to your login page';
    label.setAttribute('for', 'user'+ loginNum);
    label.textContent = 'Username ';
    input.type = 'text';
    input.id = 'user'+ loginNum;
    input.placeholder = 'username';
    submit.type = 'submit';
    submit.value = 'submit';

    login.appendChild(h2);
    label.appendChild(input);
    form.appendChild(label);
    form.appendChild(submit);
    login.appendChild(form);


}

var login1 = new Login('Eric');
var login2 = new Login('Bob');

login1.build();
login2.build();
