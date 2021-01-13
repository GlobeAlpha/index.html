//access value of radio  button
var ProjectCommercial = document.getElementById('Commercial');
var ProjectPersonal = document.getElementById('Personal');
//access value of select  





Project_Type = () =>
{
    if (ProjectCommercial.checked == true)
    {

        if (ProjectCommercial.value = "Commercial")
        {
            var Personal = document.getElementById("PersonalCunt")
            var Commercial =document.getElementById("CommercialCunt")
           
            Personal.style.display = "none"
            Commercial.style.display = "block"
        
        }
    }

     else if (ProjectPersonal.checked == true)
    {
       if (ProjectPersonal.value = "Personal")
       {
        var Personal = document.getElementById("CommercialCunt")
        var Commercial =document.getElementById("PersonalCunt")
       
        Personal.style.display = "none"
        Commercial.style.display = "block"
      
            // console.log(Commerrcial)
        }
    }
  
    
}

TechType = () =>
{

    var Tech_Type_Dropdown = document.getElementById("Tech_Types")
    console.log(Tech_Type_Dropdown)
    //  acesses  both selected Index 
    var Options = Tech_Type_Dropdown.options[Tech_Type_Dropdown.selectedIndex].text
    
    var Vanilla_Option = document.getElementById("HTML/CSS").value
    var JS_Option = document.getElementById("JS").value
    var React_Option  = document.getElementById("React").value
    
    
    // var  Tech_Types = document.getElementsByClassName()

    if (Options == JS_Option)
    {
        console.log(JS_Option)
        // console.log(`${JS_Option} option has been selected`)
        }

        else  if (Options == React_Option)
    {
        console.log(React_Option)
            // console.log(`${React_Option} option has been selected`)
    }
        
    else
    {
        console.log(`${Vanilla_Option} option has been selected`)
        }
}

