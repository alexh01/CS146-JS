function onClick(){
var username = document.getElementById("formUsername").value;
var password = document.getElementById("formPassword").value;
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
        }
        else
        {
            location.href = '../index.html';
        }
    }
    else if (mode == "signUp")
    {
        window.localStorage.setItem(username, password );
        location.href = '../index.html';
    }
}

var mode = "logIn";
window.onload = () => {
console.log(window.localStorage.getItem("m"));
window.localStorage.setItem('myCat', 'Tom');
};
