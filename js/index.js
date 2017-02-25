// http://paletton.com/palette.php?uid=33L0u0kllllaFw0g0qFqFg0w0aF
$(document).ready(function() {
  var searchTerms;
  var wikiAPI;
  var consoleTest = 'Testing';
  //Get searchTerms and trigger get function
  
  
  
  $( ".submit" ).click(function() {
  //event.preventDefault();
  
    getWiki();
});
  
  $("input").keyup(function(){
    getWiki();
  });
  
  
  
  //Start get request
  function getWiki(){
    searchTerms = $(".search-bar").val();
    searchTerms = encodeURIComponent(searchTerms);
    //$('.rand-generator').fadeOut();
    wikiAPI = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=10&iwurl=&format=json&srsearch=' + searchTerms;
    
    $.get(wikiAPI, function(data){
      console.log(data);
      //start HTML string
      var myHTML = '';
      
      $.each(data.query.search, function(i, wiki){
        var subLink = wiki.title
        subLink = subLink.replace(/ /g,"_");
        var myLink = 'https://en.wikipedia.org/wiki/' + subLink;
        console.log(myLink);
        myHTML += "<a href=" + myLink + " target='_blank'><div class='article row xs-col-12'>";
        myHTML += "<h3 class='content'>" + wiki.title + "</h3>";
        myHTML += "<br>"
        myHTML += "<p class='content'>" + wiki.snippet;
        myHTML += "</p>"
        myHTML += "</div></a>"
      }); 
      console.log(myHTML);
     $(".list").html(myHTML); //console.log(data.query.search[0].title);
    }, 'jsonp');//end get
    //$(".search-border").fadeOut();
    //$(".submit").fadeOut();
    
  } //end getWiki function

  $(".search-icon").click(function() {
    $(".search-icon").fadeOut("fast", function(){
      $(".search-border").fadeIn();
      $(".submit").fadeIn();
      $(".search-bar").focus();
      console.log(consoleTest);
    });
    
    
  });
  
});