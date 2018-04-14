$(document).ready(function(){
var PlayerTurn="X";
var Turns=[ "# " , "#" , "#" , "#" , "#" , "#" , "#" , "#" , "#" ];   
var ComputerTurn="O";
var count=0;      // make sure ComputerTurn isn't infinite
var Game = false;  // Tracks computers turn ;)

$ ("#ChoosePlayer").show();
   
   $("#TurnX").click(function() //Toogle O
  {   
   PlayerTurn="X";
   ComputerTurn="O";
   $("#TurnX").removeClass("btn-primary");
   $("#TurnO").addClass("btn-primary");
   Reset();
   
   });
   
   $("#TurnO").click(function()//Toogle X
   {
   PlayerTurn="O";
   ComputerTurn="X";
   $("#TurnO").removeClass("btn-primary");
   $("#TurnX").addClass("btn-primary");
   Reset();
   });

  function UpdateBoard(PlayerTurn, id)
   {
    var spotTaken = $("#"+id).text();   
      if(spotTaken==="#")
         {
         Turns[id] = PlayerTurn;
         $("#"+id).text(PlayerTurn);   
         count++;
         VictoryTic(Turns, PlayerTurn);
         if(Game===false)
         {
            ComputerVI();
            VictoryTic(PlayerTurn,ComputerTurn);
         } 
        
   }
      
function VictoryTic(TurnArray, CurrentTurn)
{
   if(TurnArray[0]===CurrentTurn && TurnArray[1]===CurrentTurn && TurnArray[2]===CurrentTurn) //Checks if Player 1  has created a line
   {
      Game=true;
      Reset();
      alert("Player " + CurrentTurn + " wins (Top Row across 0,1,2)");
   }
      
   else if(TurnArray[0]===CurrentTurn && TurnArray[4]===CurrentTurn && TurnArray[8]===CurrentTurn) //Checks if Player 1  has created a line
         {   
         Game=true;
         Reset();
         alert("Player " + CurrentTurn + " wins (Top Row across 0,4,8)");
          }
   
    else if(TurnArray[2]===CurrentTurn && TurnArray[4]===CurrentTurn && TurnArray[6]===CurrentTurn) //Checks if Player 1  has created a line
         {
                  Game=true;
                  Reset();
                  alert("Player " + CurrentTurn + " wins (Top Row across 2,4,6)");
         }

   else if(TurnArray[3]===CurrentTurn && TurnArray[4]===CurrentTurn && TurnArray[5]===CurrentTurn) //Checks if Player 1  has created a line
         {
                  Game=true;
                  Reset();
                  alert("Player " + CurrentTurn + " wins (Top Row across 3,4,5)");
         }
   else if(TurnArray[6]===CurrentTurn && TurnArray[7]===CurrentTurn && TurnArray[8]===CurrentTurn) //Checks if Player 1  has created a line
         {
                  Game=true;
                  Reset();
                  alert("Player " + CurrentTurn + " wins (Top Row across 2,4,6)");
         }
   
   else if(TurnArray[0]===CurrentTurn && TurnArray[3]===CurrentTurn && TurnArray[6]===CurrentTurn) //Checks if Player 1  has created a line
         {
                  Game=true;
                  Reset();
                  alert("Player " + CurrentTurn + " wins (Top Row across 0,3,6)");
         }
   
   else if(TurnArray[1]===CurrentTurn && TurnArray[4]===CurrentTurn && TurnArray[7]===CurrentTurn) //Checks if Player 1  has created a line
         {
                  Game=true;
                  Reset();
                  alert("Player " + CurrentTurn + " wins (Top Row across 1,4,7)");
         }
   else if(TurnArray[2]===CurrentTurn && TurnArray[5]===CurrentTurn && TurnArray[8]===CurrentTurn) //Checks if Player 1  has created a line
         {
                  Game=true;
                  Reset();
                  alert("Player " + CurrentTurn + " wins (Top Row across 2,5,8)");
         }
   else
   {
      Game=false;
   }
}
 
      
     function ComputerVI()
      {
         var taken=false;
         while(taken === false && count !==5)
            {
               var VIMove=(Math.random() *10 ).toFixed(); // print random value
               var PlayerMove=$("#"+VIMove).text();
            if(PlayerMove==="#")
               {
               taken=true;
              $("#"+VIMove).text(ComputerTurn);   
               console.log(ComputerTurn);   
               Turns[VIMove]=ComputerTurn;
               }
            }
      }
      
   }
   $(".tic").click(function()
   {
      var slot = $(this).attr("id");
      UpdateBoard(PlayerTurn, slot);
   });
         
 function Reset()
   {
     Turns=[ "# " , "#" , "#" , "#" , "#" , "#" , "#" , "#" , "#" ];   
     $(".tic").text("#");
     count=0;
     Game= true;  
   }
/*

OnClick Board  
Update Board
*/
});