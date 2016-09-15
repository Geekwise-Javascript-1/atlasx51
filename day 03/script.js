// var str = 'Eric';
// // var newStr = str;
// var newStr = str.trim();
// console.log(newStr);


    // math object

    // var randNum = Math.floor ( Math.random() * 3) + 5;
    // console.log(randNum);


// var toDay = new Date;
// console.log(toDay.getDate() today.getFullYear() today.getDay());
//
// var locale = 'en-us';
// var toDay = new Date;
// console.log(toDay);
// console.log(toDay.toLocaleString( locale, ))

//  var firstName = "Eric";
//
//  var lastName = "Vargas";
//
//
//
// function setBirthday(){
//     var toDay = new Date;
//     toDay.setFullYear(1984);
//     toDay.setDate(16);
//     toDay.setMonth(02)
//     console.log(toDay.getDate());
//
// }
// setBirthday();
// var userColor = prompt('choose a color');
//
// var firstName = "eric";
// var lastName + "vargas";
// var locale = "en-us";
//
// function setBirthday(color) {
//   var toDay = new Date;
//   toDay.setFullYear(1984);
//   toDay.setDate(2);
//   today.setMonth(2);
//   var fullMon = toDay.toLocaleString( locale, { month:"long"} );
//   console.log(firstName + ' ' + lastName + '.' + fullMon + toDay.getDate() + ',' + today.getFullYear() + ' . and my color is' + color);
// }
//
// setBirthday(userColor);

var userFirst = prompt('first name');
var userLast = prompt('last name');
var userBday = prompt('birthday');
var userColor = prompt('choose color');

function setBday(uF, uL, uB, uC) {
  var bdayArr = uB.split();
  console.log(
    uF +  ' ' + uL + ' ' + uB + '. Your Color is' + uC
  );

}

setBday(userFirst, userLast, userBday, userColor);
