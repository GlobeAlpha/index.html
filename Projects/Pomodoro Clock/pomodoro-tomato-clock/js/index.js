// Calculate Remaining Time m
//gong sound variable
$(document).ready(function() {
   var gong = $("#Gong")[0];
   var count = parseInt($("#SessionNum").html());
   
     var Break= parseInt($("#BreakNum").html());
  $("#Reset").hide()
  

   //Start button
  $("#Start").click(function() {
  

      var TimeDisplay = setInterval(timer, 1000);
       count*=60;

      function timer() {
         $("#Start, #Minus1MinuteSession, #Add1MinuteSession,#Minus1MinuteBreak,#Add1MinuteBreak,#Session,#SessionNum,#BreakNum,#BClock").hide();
         $("#timeType").show();
         $("#output").show();

         $("#timeType").html("Session Time : ");
          

         count -= 1;
         if (count === 0) {
            gong.play();
            clearInterval(TimeDisplay);
            var BreakTime1 = setInterval(Breaktimer, 1000);
              Break*=60;
            console.log(Break);

            $("#output").hide();
         }
         
           if (count%60>=10) 
         {
             $("#output").html(Math.floor(count/60)+":"+count%60);  //Display HH:MM format 

         }
         
         else
         {
             $("#output").html(Math.floor(count/60)+":"+"0"+count%60);  //Display HH:MM form
                                         
                                        
                                       }           
        

         function Breaktimer() {
            $("#timeType").html("Break Time: ");
            $("#BreakNum").show();
            $("#timeType").show();

            Break -= 1;
            if (Break === 0) {
               clearInterval(BreakTime1);
               gong.play();
               $("#Reset").show();
               $("#BreakNum,#timeType").hide();
             
            }
            if(Break%60>=10) 
{
             $("#BreakNum").html(Math.floor(Break/60)+":"+Break%60);}//Display HH:MM format 

         
           else
           {
            $("#BreakNum").html(Math.floor(Break/60)+":"+"0"+Break%60);  //Display HH:MM form

           }

         }
      }
   });

   //Reset button
   $("#Reset").click(function()
    {
      count=25;
      Break=5;
      $("#SessionNum").html(count);
      $("#BreakNum").html(Break);
      $("#Start, #Minus1MinuteSession, #Add1MinuteSession,#Minus1MinuteBreak,#Add1MinuteBreak,#Session,#SessionNum,#BreakNum,#BClock").show();
      $("#Reset, #timeType").hide();
   });

   //Minus5Session button

   $("#Minus1MinuteSession").click(function() {
      if (count > 5)
      {
         count -= 1;
         $("#SessionNum").html(count);
      }
   });
   //Plus1MinuteSession button
   $("#Add1MinuteSession").click(function() {
      count += 1;
      $("#SessionNum").html(count);
   });

   $("#Minus1MinuteBreak").click(function()
   {
      if (Break > 5) {
         Break -= 1;
         $("#BreakNum").html(Break);
      }
   });

   $("#Add1MinuteBreak").click(function()
    {
      Break += 1;
      $("#BreakNum").html(Break);
   });
});