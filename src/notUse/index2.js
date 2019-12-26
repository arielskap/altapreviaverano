var animationEnd = (function(el) {
  var animations = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    WebkitAnimation: 'webkitAnimationEnd',
  };

  for (var t in animations) {
    if (el.style[t] !== undefined) {
      return animations[t];
    }
  }
})(document.createElement('div'));

function bye(direccion){
  $("body").addClass("animated fadeOut faster").one(animationEnd, function(){
    switch(direccion)
    {
      case "menuReto":
        window.location.href = "menuReto.html";
        break;
      case "yoNunca":
        window.location.href = "yoNunca.html";
        break;
      case "botellita":
        window.location.href = "botellita.html";
        break;
      case "fumanji":
        window.location.href = "menuFumanji.html";
        break;
    }
  });
}
function setCookie(cname,cvalue,exdays)
{
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname)
{
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
window.onload = function() {
  var flag=getCookie("flag");
  if(flag==1)
  {
  }
  else{
    var today = new Date();
    var hoy=today.getDate();
    switch(hoy)
    {
      case 15:
        $("#textoModal").text("Hola pura sangre, animal, ¿Como andassss? Volve rapido a los boliches, todes te quieren, todes te aprecian, PURA SANGRE, la rompias toda cuando bailabas en la tarima, vos SOS PURA SANGRE NEVERPONY. ");
        $("#myModal").modal("show");
        setCookie("flag",1,365);
        break;
      case 22:
          $("#textoModal").text("¿Que onda titan? ¿Preparade para bajarte todo el speed y quedar re lokeeee como MIRKO?");
          var img =document.createElement("img");
          img.src="img/nene.gif"
          img.classList.add("img-fluid");
          document.querySelector("#cuerpoModal").appendChild(img);
          $("#myModal").modal("show");
          setCookie("flag",1,365);
          break;
      case 29:
        $("#textoModal").text("Se va a licitar un sistema de jodas latinas mediante el cual desde un Uber que quiza se instale en San Bernardo esas naves terrestres van a salir de la ruta 8 y se van a remontar hasta la estratosfera y desde ahí elegir el lugar a donde quieran ir de tal forma que en una hora y media podremos estar en Capital Federal, Montevideo, Mexico DF o en cualquier parte de America Latina");
        $("#myModal").modal("show");
        setCookie("flag",1,365);
        break;
      default:
        setCookie("flag",0,365);
        break;
    }
  }
}