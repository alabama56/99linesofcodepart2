var friends=["Rob", "Mike", "Patrick", "Kyle", "Pearce"];
for(var i=0; i <friends.length; i++ ){
    for(var f = 99; f >=3; f--){
            (f + " lines of code in the file " + f + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (f - 1) + " lines of code in the file");
    
        if(f === 3){
            ("2 lines of code in the file 2 lines of code; " + friends[i] + " strikes one out, clears it all out, 1 line of code in the file");
            ("1 line of code in the file 1 line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
          
            
        }
      
    }
  
}

var hasRun = false;
var friends=["Rob", "Mike", "Patrick", "Kyle", "Pearce"];
document.addEventListener("DOMContentLoaded", function(){

    var button = document.createElement("button");
    var text = document.createTextNode("Sing!")
    

    button.appendChild(text);
    document.body.appendChild(button);
    
    button.addEventListener("click", function(){
        if(hasRun===true){
            console.log("hello");
            return;
        }
        hasRun = true;
    
        for(var i=0; i <friends.length; i++ ){
        var friendDiv = document.createElement("div");
        var divHeader = document.createElement("h3");
        var name = document.createTextNode(friends[i]);
        friendDiv.setAttribute("class", "friend");
        divHeader.appendChild(name);
        friendDiv.appendChild(divHeader);
        document.body.appendChild(friendDiv);

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

    });
    
});