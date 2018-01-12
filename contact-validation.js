function validateForm()

{		
	var form = document.contactForm;

	if(form.name.value=="")
	{
		alert("Please Enter Your Name") ;
		form.name.focus() ;
		return false;
	}
	if(form.lastname.value=="")
	{
		alert("Please Enter Your LastName") ;
		form.lastname.focus() ;
		return false;
	}
		if(form.phone.value=="")
	{
		alert("Please Enter Your Phone Number") ;
		form.phone.focus();
		return false;
	}
	if(isNaN(form.phone.value)==true)
		{
			alert("Phone Number must be numeric") ;
			form.phone.focus();
			form.phone.value="";
			return false;
		}
		if(form.email=="")
	{
		alert("Please Enter Your Email ID!") ;
		form.email.focus() ;
		return false;
	}	
		if (!form.email.value.match(/^[\w\.\-]+@([\w\-]+\.)+[a-zA-Z]+$/))
		{
			alert("Please enter a valid E-mail ID!");
			form.email.focus();
			form.email.value="";
			return false;
		}
	
	if(form.address.value=="")
	{
		alert("Please Enter Your Address") ;
		form.address.focus() ;
		return false;
	}
	if(form.addressTwo.value=="")
	{
		alert("Please Enter Your Address 2") ;
		form.addressTwo.focus() ;
		return false;
	}
		if(form.city.value=="")
	{
		alert("Please Enter City Name") ;
		form.name.focus() ;
		return false;
	}
	if(form.zip.value=="")
	{
		alert("Please Enter Zip Code") ;
		form.zip.focus();
		return false;
	}
	if(isNaN(form.zip.value)==true)
		{
			alert("Zip Code must be numeric") ;
			form.zip.focus();
			form.zip.value="";
			return false;
		}


	if(form.state.value=="")
	{
		alert("Please Enter State Name") ;
		form.state.focus() ;
		return false;
	}
		
		
	if(form.description.value=="")
	{
		alert("Please Enter Your Description") ;
		form.description.focus();
		return false;
	}
	
	return;

}

function validateForm2()
{
	var form = document.contactForm;
	
	form.name.value==""
	form.lastname.value==""
	form.phone.value==""
	form.email==""
	form.address.value==""
	form.addressTwo.value==""
	form.city.value==""
	form.zip.value==""
	form.state.value==""
	form.description.value==""
	
}
/*function validateSearch()

{		
	var form = document.searchoption;

	if(form.search1.value=="")
	{
		alert("Please Enter Your Name") ;
		form.search1.focus() ;
		return false;
	}*/