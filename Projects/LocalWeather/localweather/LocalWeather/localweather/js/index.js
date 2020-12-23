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


   var API = "https://api.openweathermap.org/data/2.5/weather?lat=52.522794999999995&lon=-1.8436450000000002&appid=37d8911cc47bc893ab2f518f05bacfcc";
   $.getJSON(API, function (data)
   {
         $("#GetWeather").click(function ()
         {
            //Intilising MapBox  Tiles


            
            // var MapTiles = 'https://api.mapbox.com/styles/v1/mbajda/ckj1thqqu0r7t19p30ui4b1vn.html?fresh=true&title=view&access_token=pk.eyJ1IjoibWJhamRhIiwiYSI6ImNrajF0ZTA2czJ5ajEydm1tcnZjYnhuczQifQ.wt5bVKziFjaIRXlOREJH7Q'
            var Local_Weather_Map = L.map('Local_Weather_Map').setView([52.522794999999995,-1.843645000000000], 13)
            Local_Weather_Map.setView([52.522794999999995,-1.843645000000000], 0,
               {
                  reset:true
               });
            
            // L.mapbox.config.FORCE_HTTPS = true;
                  L.tileLayer('https://api.mapbox.com/styles/v1/mbajda/ckj1thqqu0r7t19p30ui4b1vn/wmts?access_token=pk.eyJ1IjoibWJhamRhIiwiYSI6ImNrajF0ZTA2czJ5ajEydm1tcnZjYnhuczQifQ.wt5bVKziFjaIRXlOREJH7Q', {
                     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                     maxZoom: 18,
                     id: 'mapbox/styles/mbajda/v1',
                     tileSize: 512,
                     zoomOffset: -1,
                     accessToken: 'pk.eyJ1IjoibWJhamRhIiwiYSI6ImNrajF0ZTA2czJ5ajEydm1tcnZjYnhuczQifQ.wt5bVKziFjaIRXlOREJH7Q'
                  }).addTo(Local_Weather_Map);


      var WeatherType = data.weather[0].description;
      var Icon = data.weather[0].icon;
      var WindSpeed = data.wind.speed;
      var city = data.name;
      var IconImg="https://openweathermap.org/img/w/"+Icon+".png";

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
