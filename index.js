let output= "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      output = eval(output);
      document.querySelector('input').value = output;
    }
    else if(e.target.innerHTML == 'AC'){
      output = ""
      document.querySelector('input').value = output;
    }
    else if(e.target.innerHTML=='⬅'){
      output=output.slice(0,-1)
      document.querySelector('input').value = output;
    }
    else{ 
    console.log(e.target)
    output = output + e.target.innerHTML;
    document.querySelector('input').value = output;
      }
  })
})