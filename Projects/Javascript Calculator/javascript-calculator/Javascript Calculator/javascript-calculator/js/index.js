$(document).ready(function()
                  
{
   
     var inputs=[""];
     var CalcInput;//Stores the numbers and operators clicked
     var MathOps=["+", "-" ,"*", "/","."];
     var Decimal=["."];
     var nums=[0,1,2,3,4,5,6,7,8,9];
   
   function getValue(input)
   {
   
     if( Decimal.includes(inputs[inputs.length-1]===true && input==="."))
        {
         console.log("Only 1 Decimal is needed");// make sure only 1 decimal is used
        }
        else if(inputs===1 && MathOps.includes(input)===false){ // make sure that no calc start with an Operator
              inputs.push(input);                
                }
        else if(MathOps.includes(inputs[inputs.length-1])===false)//makes sure that no operator before the number 
              {
             inputs.push(input); 
              }
      
       else if(nums.includes(Number(input)))
              {
               inputs.push(input);        
              }
      OutputNums();
   }
   
   
   function OutputNums(){
      
          CalcInput=inputs.join("");
          $("#Calculations").html(CalcInput);

   }
   function Sum(){
      
                CalcInput=inputs.join("");
                $("#Calculations").html(eval(CalcInput));

   }

             $("a").on("click",function() 
             {
                if(this.id==="clearAll")
                   {
                   inputs=[""];
                   OutputNums();
                   }
                else if(this.id==="ClearOne")
                {
                   inputs.pop();
                   OutputNums();
                }
                
                else if(this.id==="total")
                     {
                        Sum();
                        }
                else
                   {
                      if(inputs[inputs.length-1].indexOf("+","-","/","*") ===-1)
                         {
                            getValue(this.id);
                         }
                      else
                      { 
                         getValue(this.id); 
                      }
                      
                   }
                
             });   
                  });