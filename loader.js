

let MainImg = document.getElementById("MainImg");
let smallimg = document.getElementsByClassName("smaill-img");

smallimg[0].onclick = function() { 
    MainImg.src = smallimg[0].src;

    }
smallimg[1].onclick = function() { 
    MainImg.src = smallimg[1].src;
        
    }
smallimg[2].onclick = function() { 
    MainImg.src = smallimg[2].src;
            
    }
smallimg[3].onclick = function() { 
    MainImg.src = smallimg[3].src;
            
    }