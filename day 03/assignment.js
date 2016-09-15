var name = prompt("what is your name?");

name = capitalize(name);

function capitalize(n){
  return n.charAt(0).toUpperCase() + n.substr(1, n.length);
}
console.log(name);
