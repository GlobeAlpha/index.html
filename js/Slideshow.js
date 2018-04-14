var CurrentImg = 1;
var TotalImgs = 8;


$(document).ready(function () {
    $("#Previous").click(function () {

        $("#img_" + CurrentImg).fadeOut(1);
        console.log(CurrentImg);
        CurrentImg--;
        if (CurrentImg < 1)
           {
               CurrentImg = TotalImgs;
        }
        
        $("#img_" + CurrentImg).fadeIn(1)
        console.log(CurrentImg);
    });

    $("#Next").click(function () {

        $("#img_" + CurrentImg).stop().fadeOut(1);
        //increaseImg();
        console.log(CurrentImg);
        CurrentImg++;
        if (CurrentImg > TotalImgs)
           {
               CurrentImg = 1;
               console.log(CurrentImg);
          }
        
        $("#img_" + CurrentImg).stop().fadeIn(1);
        //console.log(CurrentImg);
    });
});



    //   function decreaseImg()
    //   {
    //       --CurrentImg;
    //       if (CurrentImg < 1)
    //       {
    //           CurrentImg = TotalImgs;
    //       }
    //}

    //   function increaseImg()
    //   {
    //       ++CurrentImg;
    //       if (CurrentImg > TotalImgs)
    //       {
    //           CurrentImg = 1;
    //           console.log(CurrentImg);
    //       }
    //   }
       



