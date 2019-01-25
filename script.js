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

function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}

function verifMail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifForm(f)
{
   var mailOk = verifMail(f.email);
   
   if(mailOk)
      return true;
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      return false;
   }
}