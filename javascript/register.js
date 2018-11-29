function onClick(){
var username = document.getElementById("formUsername").value;
var password = document.getElementById("formPassword").value;
var checkBox = document.getElementById("checkbox");
    if (attempts >= 3 && checkBox == null)
    {
        checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.id = "checkbox";
        checkBox.innerHTML = "I'm not a robot.";
        checkBox.required = true;
        var form = document.getElementsByTagName("form")[0];
        form.appendChild(document.createElement("br"));
        form.appendChild(checkBox);
        form.appendChild(document.createTextNode("I'm not a robot."));
    }
    if (mode == "logIn")
    {    
        var actualPassword = window.localStorage.getItem(username);
        if (actualPassword == null)
        {
            document.getElementById("message").innerHTML = "No account exists with that username. Would you like to register with it?";
            mode = "signUp";
        }
        else if (actualPassword != password)
        {
            document.getElementById("message").innerHTML = "That is the incorrect password! Try a different password or a different acount.";
            attempts += 1;
        }
        else
        {
            if (checkBox == null || checkBox.checked)
            {
                location.href = '../index.html';
            }
            else
            {
               document.getElementById("message").innerHTML = "Please check the checkbox!";
            }
            

        }
    }
    else if (mode == "signUp")
    {
        window.localStorage.setItem(username, password );
        location.href = '../index.html';
    }
}

var mode = "logIn";
var attempts = 0;
window.onload = () => {
window.localStorage.setItem('myCat', 'Tom');
};
