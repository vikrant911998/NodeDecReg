window.addEventListener('load',init);


function init(){
    var expression = document.getElementById('expr');
    expression.addEventListener('input',()=>checkOperator(expression));

    var clear = document.getElementById('cls');
    clear.addEventListener('click',function(){
        clearData(expression);
    });

    var calculate = document.getElementById('calc');
    calculate.addEventListener('click',()=>compute(expression));
}

function checkOperator(expression){
    var oprs = ['+','-','*','/','%'];
    var str = expression.value;
    var array = str.split('');
    

    var last1=false;
    var last2=false;

    for(let item of oprs){
        if(item == array[ array.length - 1 ])
            last1 = true;

        if(item == array[ array.length - 2 ])
            last2 = true;
    }


    if(last1 && last2){
        var lastCharacter = array.pop();
        array.pop();
        array.push(lastCharacter);
    }


    expression.value = "";
    for(let item of array){
        expression.value += item;
    }
}



function compute(expression){

    if(expression.value.length >0){
        var result = eval(expression.value);
        expression.value = result;
    }
}

function clearData(expression){
    expression.value = "";
}