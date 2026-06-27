
var first_number;
var second_number;

function set_number(selected_num)
{
    var x = document.getElementById("screen").innerHTML;

    if (x == "0.0")
        document.getElementById("screen").innerHTML = "";

    document.getElementById("screen").innerHTML += selected_num;
}

function func()
{
    first_number = document.getElementById("screen").innerHTML;
    document.getElementById("memory").innerHTML = first_number + " + ";
    document.getElementById("screen").innerHTML = "";
}

function show_result()
{
    second_number =  document.getElementById("screen").innerHTML;

    document.getElementById("memory").innerHTML += second_number
   
    var result = parseFloat(first_number) + parseFloat(second_number);

    document.getElementById("screen").innerHTML = result;


}