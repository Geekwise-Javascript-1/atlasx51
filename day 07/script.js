// var btn = document.querySelector('button');

// btn.addEventListener('click', once)
//
//
// function once(){
//   console.log('done');
//   btn.removeEventListener('click', once);
// }

// btn.addEventListener('mousedown', function(e){
//   console.log(e);
//   if(e.which == 1){
//     console.log('left click');
//
//   }else if(e.which == 2){
//     console.log('middle click');
//
//   }else if(e.which == 3){
//     console.log('right click');
//   }
// });
//
// a.addEventListener('click', function(e){
//   console.log(e);
//   e.preventDefault();
//   console.log('google block');
//
// });

// addEventListener('keydown', function(e){
//   console.log(e);
//   if(e.keyCode == 6){
//     document.body.style.backgroundColor = 'violet';
//   }
// });
// addEventListener('keyup', function(e){
//   if(e.keycode == 86 ){
//     document.body.style.backgroundColor = '';
//
//   }
// });

// console.log("P".charCodeAt(0));

// addEventListener('mousemove', function(e){
//   // console.log(e.screenY+'px');
// });

// addEventListener('click', function(e){
// // console.log(e);
// var dot = document.createElement('div');
// dot.className = 'dot';
// dot.style.left = (e.pageX - 3) + 'px';
// dot.style.top = (e.pageY - 3) + 'px';
// document.body.appendChild(dot);
// });
var hdr = document.querySelector('header');

addEventListener('scroll', function(e){
  console.log(e);
  if(e.pageY >= 65){
    hdr.classList.add('fixed');
    document.body.style.paddingTop = '65px';

  }else{
    hdr.classList.remove('fixed');
      document.body.style.paddingTop = '0px';
  }
});
