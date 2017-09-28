var hasRun = false;
var friends=["Rob", "Mike", "Patrick", "Kyle", "Pearce"];



var button = document.createElement("button");
var text = document.createTextNode("Sing!");
var divButton = document.createElement("button");
var friendDiv = document.createElement("div");

document.addEventListener("DOMContentLoaded", function(){


    button.appendChild(text);
    document.body.appendChild(button);
   
    
    
    button.addEventListener("click", function(){
        var divButton = document.createElement("button");
        
  
        for(var i=0; i <friends.length; i++ ){
            var friendDiv = document.createElement("div");
            var divHeader = document.createElement("h3");
            var name = document.createTextNode(friends[i]);
            var divButton = document.createElement("button");
            var buttonText = document.createTextNode("Sing!");
            divButton.appendChild(buttonText);
            friendDiv.setAttribute("class", "friend");
            divHeader.appendChild(name);
            friendDiv.appendChild(divHeader);
            friendDiv.appendChild(divButton);
            document.body.appendChild(friendDiv);
            
            divButton.addEventListener("click", onButtonClick.bind(this));
              
        }

        
    
    });

    
});



function onButtonClick(){
    console.log("help");
}