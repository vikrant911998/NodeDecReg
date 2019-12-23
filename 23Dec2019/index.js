// window.onload = register;

window.addEventListener('load',register);


function register(){
    var outerDiv = document.getElementById('result');
    var resultDiv = document.createElement('div');

    resultDiv.style.width = "90px";
    resultDiv.style.height = "90px";
    resultDiv.style.border = '2px solid blue';

    outerDiv.appendChild(resultDiv);

    var changeButton = document.getElementById('btn');
    changeButton.addEventListener('click',change);
    // changeButton.onclick = function(){
    //     resultDiv.innerHTML = 'Result Div';
    // }
}



// changeButton.onclick = change;



