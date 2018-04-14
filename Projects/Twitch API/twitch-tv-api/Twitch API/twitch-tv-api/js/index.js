$(document).ready(function(){
   var Following=[];

      $.ajax({
         type:"GET",
         url:"https://api.twitch.tv/kraken/streams/freecodecamp?client_id=qracycwc3b4keuj0n4oxyta4e3oc1v",
         headers:{
            'Client-ID' : 'qracycwc3b4keuj0n4oxyta4e3oc1v'
                },
             success:function(data1){               
               if(data1.stream === null)
                {
               $("#FCC-Status").html( "FreeCodeCamp is OFFLINE");
               }
                else
                   {
               $("#FCC-Status").html( "FreeCodeCamp is ONLINE");

                }
            }

             });
          
   var FollowerURL="https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/?client_id=qracycwc3b4keuj0n4oxyta4e3oc1v";
   $.getJSON(FollowerURL ,function(data2){
      for(var i=0;i<data2.follows.length;i++){
      var DisplayName=data2.follows[i].channel.display_name;
      var logo=data2.follows[i].channel.logo;
      var status=data2.follows[i].channel.status;
         if(logo==null){
           logo="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";}
      $("#followerInfo").prepend("<div class='row'>"+" <div class='col-md-4'>" + "<img src=' " + logo + "  '>" + "</div>" + "<div class='col-md-4'>" + DisplayName + "</div>" + "<div class='col-md-4'>" + status + "</div>" + "</div></div>");
      }

      Following.push ("ESL_SC2");
      Following.push("brumfin");
      Following.push("comster404");
      console.log(Following);

      var deletedFollowers=["brumfin","comster404"];
      for(var i =0;i<deletedFollowers.length;i++){
         $.ajax({
         type:"GET",
         url:"https://api.twitch.tv/kraken/streams"+deletedFollowers[i]+"?client_id=qracycwc3b4keuj0n4oxyta4e3oc1v",
            headers:{
            'Client-ID':'qracycwc3b4keuj0n4oxyta4e3oc1v'
            },
            error:function(data3){
              var logo= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g";
               var status=data3.status;
               var DisplayName=data3.statusText;

$("#followerInfo").prepend("<div class ='row'>" + "<div class='col-md-4'>" +
              "<img src='" + logo + "'>"+"</div>" + "<div class='col-md-4'>" + DisplayName + "</div>" + "<div class='col-md-4'>" + status + "</div></div>");

            }

         });
         //"channels/?client_id=qracycwc3b4keuj0n4oxyta4e3oc1v";
         }

   });
   });
