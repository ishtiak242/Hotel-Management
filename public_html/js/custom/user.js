function loginmethod() {

	
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var atLocation = email.indexOf("@");
	var dotLocation = email.lastIndexOf(".");
	//var email1 = document.forms["loginform"]["email"].value;
	if(atLocation< 1 || (dotLocation - atLocation)< 2 ){
      
      alert("Email is not Valied!!!");
      document.forms["loginform"]["email"].style.borderColor="red";
      document.forms["loginform"]["password"].style.borderColor="red";
      return false;
  }
	else if(!email == "" && !password == "")
	{
		alert("Log in Sussessfull");
		document.forms["loginform"]["email"].style.borderColor="green";
      document.forms["loginform"]["password"].style.borderColor="green";
      return false;

	}
	else {
		alert("Field must not empty ");
		}
}


function singupmethod(){
	

var cemail = document.getElementById('c_email').value;
var cpassword = document.getElementById('cpassword').value;
var fullname = document.getElementById('fullname').value;

var atLocation = cemail.indexOf("@");
var dotLocation = cemail.lastIndexOf(".");



if (cemail=="" && cpassword =="" && fullname == "") {
	alert("Field must not empty ");
		document.forms["singupform"]["c_email"].style.borderColor="red";
		document.forms["singupform"]["cpassword"].style.borderColor="red";
		document.forms["singupform"]["fullname"].style.borderColor="red";
	}

else if(atLocation< 1 || (dotLocation - atLocation)< 2 ){
      
      alert("Email is not Valied!!!");
      document.forms["singupform"]["c_email"].style.borderColor="red";
      return false;
  }

else if(!cpassword == "" && !fullname == "")
	{
		alert("Sing up  Sussessfull");
		document.forms["singupform"]["c_email"].style.borderColor="green";
		document.forms["singupform"]["cpassword"].style.borderColor="green";
		document.forms["singupform"]["fullname"].style.borderColor="green";
	}
	console.log("Boom");
}
