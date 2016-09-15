// var fruta = prompt('what is your favorite fruit?')
//
//  var fruit = ['apple', 'mango', 'guava', 'pineapple'];
// // fruits.push('kiwi');
// //
// //
// // console.log(fruits);
//
// var fruitColor = [];
// var cherry = ['cherry', 'red'];
// // var banana = ['banana', 'yellow'];
// // var kiwi = ['kiwi', 'green'];
// //
// // fruitColor.push(cherry);
// // fruitColor.push(banana);
// // fruitColor.push(kiwi);
// //
// // var lastFruit = fruitColor.pop(); //remove fron the end of array
// // var firstFruit = fruitColor.shift(); //remove from the beginning of the array
// //
// // // console.log( firstFruit);
// // // console.log( fruitColor);
// //
// // // console.log(fruitColor[0][1]);
// // // console.log(fruitColor[1][1]);
// // // console.log(fruitColor[2][1]);
// //
// // // var selectedFruit = fruit.slice(2, 4);
// // // console.log(fruit);
// // // console.log(selectedFruit);
// //
// // fruit.splice(1, 2, 'grape');
// // console.log(fruit);
//
// var fruits =[];
//
// function getFruit(){
//   var fruit = prompt('enter a fruit');
//   fruits.push(fruit);
//   moreFruit();
//
// }
//
// function moreFruit(){
//     var addMore = confirm('add more?');
//     if( addMore) {
//       getFruit();
//
//     }else{
//       console.log(fruits);
//       removeFruit();
//     }
// }
//
// function removeFruit(){
//   var remove = prompt('enter an index number');
//   fruits.splice(remove, 1);
//   fruits.sort();
//   outputFruits(fruits);
// }
// function outputFruits(array){
  // for(var i = 0, len = array.length; i < len; i++){
  //   console.log(array[i]);
  // }
  // var i = 0;
  // while(i < array.length){
  //   console.log(array[i]);
  //   i++;
  // }

//   var i = 0;
//   do {
// //     console.log(array[i]);
// //     i++;
// //
// //   }while ( false);
// // }
//
// getFruit();

 var i = 0;

 while(i < 10){
   if(i === 6) {
     i++;
     break;
   }
   console.log(i);
   i++;
 }
 // for(var i = 1; i <= 10; i++){
//   if(i === 5 || i === 7){
//     continue;
//   }
//   console.log(i);
// }
// for (i = 0; i < 10; i++)
// if (i === 5,7) {continue}
// console.log(i);
