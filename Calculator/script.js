//core logic for following actions
//step-1 append values
//step-2 clear screen
//step-3 perform calculation

function appendValue(value)
{
    //reading the value
    //using DOM we can read the value
    document.getElementById("result").value += value;
}

function clearResult()
{
    //setting the text box as blank hence clearing value
    document.getElementById("result").value = "";
}

function calculate()
{
    //variables to hold expression as well as  output
    let expressions = document.getElementById("result").value;
    //using eval(expressions) to evaluate code
    let output = eval(expressions);
    document.getElementById("result").value = output;
}

