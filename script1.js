const addBtn = document.getElementById('addBtn');
const display = document.getElementById('display');

display.addEventListener('click', fun);
addBtn.addEventListener('click', executeAdd);


function fun() {
  
  /*Getting the number of text fields*/
  var no = document.getElementById('idname').value;
  /*Generating text fields dynamically in the same form itself*/
  for (var i = 0; i < no; i++) {
    var textfield = document.createElement('input');
    textfield.type = 'number';
    textfield.class = 'enteredNum';
    textfield.id = `num${i}`;
    textfield.value = '';
    document.getElementById('values').appendChild(textfield);
  }

  const button =document.getElementById('display')
  button.disabled=true
}

function executeAdd() {
  let count = document.getElementById('idname').value;

  let sum = 0;
  for (let i = 0; i < count; i++) {
    let divs = document.getElementById(`num${i}`).value;

    sum = sum + Number(divs);
  }

  let result = document.getElementById('sum');
  result.innerHTML = `Sum of input/s = ${sum}`;
}
