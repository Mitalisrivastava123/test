function function1()
{
    var text = document.getElementById("text1").value;
    var passw=  "/^[A-Za-z]\w{7,14}$";
    if(text.length >8 && text.length <15 )
    {
        document.getElementById("message").innerHTML="you have entered correct";
    }
    else if(text.match(passw))
    {
 
        document.getElementById("message").innerHTML="please enter at least one digit ";
    }
    else
    {
        document.getElementById("message").innerHTML="password should between 8 to 15 characters";
    }
    
  

}