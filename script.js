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

function valider(mail){
    mail = document.getElementById(mail);
    if (mail.indexOf("@")!= -1 && mail.indexOf('.')!=-1) {
        document.location.href="redirection.html";
    }
    else{
       document.write("L'email est incorrecte");
    }
}