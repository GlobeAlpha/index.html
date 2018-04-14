$(document).ready(function(){
$("#Search").click(function(){


var SearchTerm=$("#SearchTerm").val();
   var URL= "https://en.wikipedia.org/w/api.php?action=opensearch&search="+SearchTerm+"&format=json&callback=?";
$.ajax({
   type:"GET",
   url:URL,
   async:false,
   dataType:"json",
   success:function(data){
    console.log(data);
      $("#output").html('');// resets output list
      for(i=0;i<data[1].length;i++){
      $("#output").prepend("<a href="+data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
      }
   },
error:function(errorMessage){
alert("Its Not Working");
}   
});
});
});