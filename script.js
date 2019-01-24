document.getElementById('btn').addEventListener("click", toggle);
            
            document.getElementById('retour').addEventListener("click", toggle);
 
            function toggle(popin) {
                node = document.getElementById("popin");
                if (node.style.visibility=="visible") {
                    node.style.visibility = "hidden";
                } else {
                    node.style.visibility = "visible";
                }
                
                node = document.getElementById("anticlick");
                if (node.style.visibility=="visible") {
                    node.style.visibility = "hidden";
                } else {
                    node.style.visibility = "visible";
                }
            }