
function randomQuote(quotes){
  let len = quotes.length;
  let randNum = Math.floor(Math.random()*len);
  console.log(quotes[randNum])
  return quotes[randNum]
}

function setQuote(quotes){
  let randQuote = randomQuote(quotes);
 
  $('#text').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#quote-text').text(randQuote.quote);
  });
  
 $("#author").animate({opacity: 0}, 500, function(){
   $(this).animate({opacity: 1}, 500)
  $("#quote-author").html(randQuote.author) 
 })
 
  
}

function getQuotes(){
  $.getJSON('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
  .done(function(data){
    console.log(data.quotes)
    setQuote(data.quotes);
  })
}
$(document).ready(function(){
  console.log("start jquery...");
  getQuotes();
})

$("#new-quote").click(function() {
  getQuotes();
});
