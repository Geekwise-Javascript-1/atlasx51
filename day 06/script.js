// var input1 = document.getElementById('input1');
//
// var inputs = document.getElementsByClassName('input');
// // console.log(input1);
// // console.log(inputs);
// //
//
// var btn = document.getElementById('btn');
//
// var inputsTag = document.getElementsByTagName('input');
//
// var btnEl = document.querySelector('button[type=button]');
//
// var btnEls = document.querySelectorAll('btn');
//
//
// function getInputs(){
//   for(var i = 0; 1 < inputs.length; i++){
//
//   console.log(inputs.value);
// }
// }
// btn.onclick = btnInputs;
//
// console.log(btnEls);

//
// var submitBtn = document.getElementById('submit');
// var form = document.getElementsByTagName('form')[0];
// submitBtn.onclick = getVals;
// function getVals(e){
//   e.preventDefault();
//   // console.log(form.elements);
//   for (var i = 0; i < form.elements.length; i++) {
//     console.log(form.elements[i].value);
// }
// }

// var lis = document.getElementsByTagName('li');
//   for (var i = 0; i < lis.length; i++) {
//    lis[i] .addEventListener('click', function(e){
//      console.log(this.textContent);
//      console.log(e.target.textContent);
//      console.log(e.currentTarget.textContent);
//   });
// }
//  console.log(lis.array);
//


  // function logName(name){
  //   console.log(name);
  // }

// var foo = function(name){
//     console.log(name);
// }
//
// foo('eric');



// var inputEl = document.createElement('input');
//   inputEl.id = 'newId';
//   inputEl.name = 'new';
//   inputEl.type = 'email';
//   inputEl.placeholder = 'example@email.com';
//   document.body.appendChild(form);
//   console.log(form);
//
// onclick.inputEl


var theForm = document.getElementsByTagName('form')[0];
var submit = document.querySelector('input[type="submit"]');
var addField = document.getElementsByTagName('button')[0];

var incNum = 1;


addField.addEventListener('click', createField);

function createField(){
  var newLabel = document.createElement('label');
  newLabel.setAttribute("for", "generic"+incNum);
  newLabel.innerHTML="Generic Label";


var newInput = document.createElement('input');
newInput.id = 'generic';
newInput.name = 'generic';
newInput.type = 'text';
newInput.placeholder = 'generic input box';

addToForm(newLabel, newInput);

// document.body.appendChild(newLabel);
}

function addToForm(newLabel, newInput){
  newLabel.appendChild(newInput);
  theForm.appendChild(newLabel);
  theForm.insertBefore(newLabel, submit);
}

addField.addEventListener('click', createField);

function getInputVals(e){
  e.preventDefault();
  var inputs = [];
  for(var i= 0; i < theForm.elements.length; i++){
    inputs.push(theForm.elements[i].value);
  }

}

submit.addEventListener('click', getInputVals);




//
// on 'click to add more' button
// append new instance of inputEl to form
//
// add submit button back into form
// ensure that each instance is appended BEfore submit
// modify every dynamic input to be text
// on submit, output to console new array of values
