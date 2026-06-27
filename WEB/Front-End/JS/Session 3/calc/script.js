
var first_number;
var second_number;
var operation;
var my_mood = "dark";

function set_number(selected_num)
{
    var x = document.getElementById("screen").innerHTML;

    if (x == "0.0")
        document.getElementById("screen").innerHTML = "";

    document.getElementById("screen").innerHTML += selected_num;
}

function func(selected_operation)
{
    first_number = document.getElementById("screen").innerHTML;
    document.getElementById("memory").innerHTML = first_number + selected_operation;
    document.getElementById("screen").innerHTML = "";
    operation = selected_operation;
}

function show_result()
{
    second_number =  document.getElementById("screen").innerHTML;

    document.getElementById("memory").innerHTML += second_number;
    
    if (operation == '+')
        var result = parseFloat(first_number) + parseFloat(second_number);
    else if (operation == '-')
        var result = parseFloat(first_number) - parseFloat(second_number);
    else if (operation == '*')
        var result = parseFloat(first_number) * parseFloat(second_number);
    else if (operation == '/')
        var result = parseFloat(first_number) / parseFloat(second_number);


    document.getElementById("screen").innerHTML = result;


}


function reset_all()
{
    first_number = "";
    second_number = "";
    operation = "";
    document.getElementById("screen").innerHTML = "";
    document.getElementById("memory").innerHTML = "";
}


function dark_light()
{
    if (my_mood == "dark")
    {
        document.querySelector(':root').style.setProperty('--color1', 'rgb(231,231,231)');
        document.querySelector(':root').style.setProperty('--color2', 'rgb(190, 190, 190)');
        document.querySelector(':root').style.setProperty('--color3', 'rgb(224, 224, 224)');
        document.querySelector(':root').style.setProperty('--text_color', 'black');
        document.getElementById("dark_light").style.background = "rgb(150,150,150)";
        my_mood = "light";
    }
    else  if (my_mood == "light")
    {
        document.querySelector(':root').style.setProperty('--color1', 'rgb(30,33,42)');
        document.querySelector(':root').style.setProperty('--color2', 'rgb(90, 90, 90)');
        document.querySelector(':root').style.setProperty('--color3', 'rgb(54, 54, 54)');
        document.querySelector(':root').style.setProperty('--text_color', 'white');
        document.getElementById("dark_light").style.background = "white";
        my_mood = "dark";
    }
}
