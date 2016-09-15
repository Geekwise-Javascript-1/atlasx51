var btn = document.getElementById('btn');

var inp1 = document.getElementById('input1');

var inp2 = document.getElementById('input2');

var output = document.getElementById('output');

function btnClick() {
    inp1.value = "Hello Javascript!";
    alert(inp1.value);
    output.textContent = inp2.value;

}

btn.onclick = btnClick;
//create js object for input1, input2, btn, div
//after inputting values for input 1 and input 2
//user clicks go
//input1 value replaced with text "Hello Javascript!"
//alert new value of input1
//replaced div text with value of input2
