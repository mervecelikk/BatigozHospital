
    function thememode() {
        var set = document.querySelector(".set");
        var switch1 = document.getElementById("switch-1");
        
        if (switch1.checked) {
            set.style.backgroundColor = "#152341";
            navbarbottom.style.backgroundColor = "#152341";
        } else {
            set.style.backgroundColor = "white";
        }
    }


    function fontmode() {
        var modaltextsetting = document.querySelector(".set");
        var switch2 = document.getElementById("switch-2");
  
        if (switch2.checked) {
        modaltextsetting.style.fontSize = "24px";
        } else {
        modaltextsetting.style.fontSize = "16px";
        }
    }
    

    
    
    
    
    
