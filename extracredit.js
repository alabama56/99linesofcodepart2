var hasRun = false;
var friends=["Rob", "Mike", "Patrick", "Kyle", "Pearce"];



var button = document.createElement("button");
var text = document.createTextNode("Sing!");
var divButton = document.createElement("button");
var friendDiv = document.createElement("div");
friendDiv.setAttribute("class", "friend");

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
            
            divButton.addEventListener("click", buttonPress.bind(friends[i]))    
           
   
        }
        



    }); 



});

function buttonPress(name){ 
    for(var i=0; i <friends.length; i++ ){
        for(var j = 99; j>0; j--){
            var para = document.createElement("p");
            friendDiv.appendChild(para);
            if (j === 2) {
                var song = document.createTextNode(j + " lines of code in the file " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file");
            para.appendChild(song);
            } else if (j === 1) {
                var song = document.createTextNode(j + " lines of code in the file " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
            para.appendChild(song);
            } else {
                var song = document.createTextNode(j + " lines of code in the file " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file");
            para.appendChild(song);
            }
        }   
    }     
}