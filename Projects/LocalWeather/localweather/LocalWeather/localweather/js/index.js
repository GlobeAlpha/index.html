$(document).ready(function ()
{
   var long;
   var lat;
   var fTemp;
   var cTemp;
   var TempSwap;

   if (navigator.geolocation)
   {      // Current Position
     navigator.geolocation.getCurrentPosition(function(position) {
     long = position.coords.longitude;
     lat = position.coords.latitude;

    });

    };


   var API = "http://api.openweathermap.org/data/2.5/weather?lat=52.522794999999995&lon=-1.8436450000000002&appid=37d8911cc47bc893ab2f518f05bacfcc";
   $.getJSON(API, function (data)
   {
         $("#GetWeather").click(function ()
         {
      
      var WeatherType = data.weather[0].description;
      var Icon = data.weather[0].icon;
      var WindSpeed = data.wind.speed;
      var city = data.name;
      var IconImg="http://openweathermap.org/img/w/"+Icon+".png";

   $("#Icon").prepend("<img src= "+IconImg+" >");
   $("#city").html("City: "+city);
   $("#WeatherType").html("   Weather Type : " + WeatherType);
   $("#WindSpeed").html("Windspeed "+WindSpeed+" km/h"); });

         $.getJSON(API, function (data)
         {
               var Kelvin = data.main.temp;
               fTemp = ((Kelvin)*(9/5)-459.67).toFixed(2);
               cTemp = (Kelvin-273).toFixed(1);

            $("#Temp").html( "Temp : "+fTemp+" \xB0 F");

            $("#Temp").click(function ()
            { 
               if (TempSwap === false)
               {
                  $("#Temp").html( "Temp : "+cTemp+" \xB0 C");
                  TempSwap = true;
               }

               else
               {
                     $("#Temp").html("Temp : "+fTemp+" \xB0 F");
                     TempSwap = false;
               }
   });
      WindSpeed = 3.6 * (WindSpeed);

});

});
});
