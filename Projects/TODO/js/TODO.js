function deleteTodoItem(e, item) {
  e.preventDefault();
  $(item).parent().fadeOut('slow', function() { 
    $(item).parent().remove();
  });
}

function Get_Item()
{
var todos= ("#text").html();
var todos_str=localStorage.getItem('.Checking');
if(todos_str != null) {
  todos=JSON.parse(todos_str);

   }
   return todos;
   console.log(todos);
}

$("#TextSub").click(function(){

  var Add=$("#text").val();
  $("ol").append("<div class='Checking' ><li><input class='no-label' type='checkbox'>"+ Add+"</label>&nbsp<button class='Delete'> delete </button></li></div>");
  console.log(Add);
  
  
$('.Delete').click(function(e)
{
  $("no-label").remove();
  
  var item = this; 
  deleteTodoItem(e, item);
});

$(":checkbox").click(function () 
{
  
  if($(this).prop("checked") == true)
  {
    // alert("Checkbox is checked.");
  $(this).parent().css("text-decoration","line-through");
  }
  
  else if($(this).prop("checked") == false){
  $(this).parent().css("text-decoration","none");
  
  }

  
$("#get").click(function () 
{
  
  Get_Item();
  // console.log("Pee");
  
  });
  


});
  });
