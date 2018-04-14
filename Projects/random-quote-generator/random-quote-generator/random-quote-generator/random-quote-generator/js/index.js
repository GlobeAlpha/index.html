var randQuote;
var randAuthor ;


$(document).ready(function(){

function GetQuotes(){

   var QuoteArr=["\"When I step into this library, I cannot understand why I ever step out of it.\"", 


"\"Think not those faithful who praise all thy words and actions, but those who kindly reprove thy faults.\"", 


 
"\"Man is what he believes.\"", 

 
"\"Old age is not so bad when you consider the alternatives.\"", 


"\"Computer Science is no more about computers than astronomy is about telescopes.\"" ,

 
"\"You don't have to suffer to be a poet adolescence is enough suffering for anyone.\"", 
 
 
"\"Do not think of knocking out another person's brains because he differs in opinion from you. It would be as rational to knock yourself on the head because you differ from yourself ten years ago.\"", 


"\"For aught that I could ever read, could ever hear by tale or history, the course of true love never did run smooth.\"", 


"\"Thus the metric system did not really catch on in the States, unless you count the increasing popularity of the nine-millimeter bullet.\"", 
 

"\"The dead might as well try to speak to the living as the old to the young.", 


"\"I'm against picketing, but I don't know how to show it.", 


"\"You never find yourself until you face the truth." ,


"\"Great spirits have always found violent opposition from mediocrities. The latter cannot understand it when a man does not thoughtlessly submit to hereditary prejudices, but honestly and courageously uses his intelligence and fulfills the duty to express the results of his thought in clear form.\"", 


"\"My favorite thing about the Internet is that you get to go into the private world of real creeps without having to smell them.\"", 
 

"\"Where any one body of educated men, of whatever denomination, are condemned indiscriminately, there must be a deficiency of information, or...of something else.\"", 


"\"My own business always bores me to death I prefer other people's.\"", 


"\"Give a man a fish and you feed him for a day. Teach a man to fish and you feed him for a lifetime.\"" ,


"\"Think twice before you speak and then you may be able to say something more insulting than if you spoke right out at once.\"" ,


"\"Some things have to be believed to be seen.\"", 


"\"If you drink, don't drive. Don't even putt.\"" 
];
var Authors = [ " -  Marie de Sevigne"  ,"-  Socrates" , "-  Anton Chekhov" , "- Maurice Chevalier" , "- W. Dijkstra " , " - John Ciardi "  ,"- John Ciardi" ,   "- Horace Mann","  - William Shakespeare","- Dave Barry","- Willa Cather","-  Mitch Hedberg","- Pearl Bailey","- Albert Einstein" ,"-   Penn Jillette","-  Jane Austen"," - Oscar Wilde" ,"-  Chinese Proverb","- Evan Esar","- Ralph Hodgson","- Dean Martin"
              ];
   
   
   randNum=Math.floor(Math.random()*QuoteArr.length);// random seed
 randQuote =QuoteArr[randNum];
 randAuthor = Authors[randNum];
$(".quote").text(randQuote);
$(".Author").text(randAuthor);
}
   
   $("#GetQuote").on("click",function(){
      GetQuotes();
   
   });
   $("#Tweet").on("click",function(){
   window.open("https://twitter.com/intent/tweet?text=" + randQuote +" "+randAuthor )
      
   });
   
});