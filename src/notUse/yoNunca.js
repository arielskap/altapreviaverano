var numMath=50;
var numeroSwitch=[];
var flag=0;

function cargarSwitch(){
    for(var i=0;i<numMath;i++)
    {
        numeroSwitch[i]=i+1;
    }
}
function pCambiar()
{
    var p = document.getElementById("pYoNunca");
    var numAleatorio = Math.floor((Math.random() * numMath));
    var random;
    var pRandom;
    $(p).remove();
    $(".row").prepend(p);
    switch(numeroSwitch[numAleatorio])
    {
        case 1:
            $(p).text("Meti la mano en el agua del inodoro");
            break;
        case 2:
            $(p).text("Tome alcohol");
            break;
        case 3:
            $(p).text("Me desnude en publico");
            break;
        case 4:
            $(p).text("Bailé Fortnite");
            break;
        case 5:
            $(p).text("Tome Clonazepam");
            break;
        case 6:
            $(p).text("Cogí");
            break;
        case 7:
            $(p).text("Tuve una hije");
            break;
        case 8:
            $(p).text("Hice un Tik Tok");
            break;
        case 9:
            $(p).text("Le revise el celu a mi pareja/ex");
            break;
        case 10:
            $(p).text("Quebre");
            break;
        case 11:
            $(p).text("Volvi con una ex pareja");
            break;
        case 12:
            $(p).text("Me cogí a una ex pareja de un amigue");
            break;
        case 13:
            $(p).text("Me tire un pedo y le heche la culpa a otre");
            break;
        case 14:
            $(p).text("Le mande un msj a mi ex pareja estando alcoholizado");
            break;
        case 15:
            $(p).text("Hice pis en la pileta");
            break;
        case 16:
            $(p).text("Tuve que hablar con la policia por hacer una fiesta");
            break;
        case 17:
            $(p).text("He indicado mal un camino cuando me han preguntado");
            break;
        case 18:
            $(p).text("Me di cuenta despues de cagar que no habia papel");
            break;
        case 19:
            $(p).text("Use un juguete sexual");
            break;
        case 20:
            $(p).text("Termine una relación");
            break;
        case 21:
            random=Math.floor((Math.random() * 2) + 1);
            switch(random)
            {
                case 1:
                    pRandom="Recibí";
                    break;
                case 2:
                    pRandom="Envie";
                    break;
            }
            $(p).text(pRandom+" nudes");
            break;
        case 22:
            $(p).text("Me masturbe");
            break;
        case 23:
            $(p).text("Me le insinue a les tutores de un amigue");
            break;
        case 24:
            $(p).text("He fumado Marihuana");
            break;
        case 25:
            $(p).text("He sido infiel");
            break;
        case 26:
            $(p).text("He tenido relaciones en lugares publicos");
            break;
        case 27:
            $(p).text("He tenido relaciones con dos o más personas en el mismo día");
            break;
        case 28:
            $(p).text("He tenido un trio");
            break;
        case 29:
            $(p).text("He tenido una orgia");
            break;
        case 30:
            $(p).text("He tenido sexo con otra persona en la habitación presente");
            break;
        case 31:
            $(p).text("He tenido sexo con una persona que ni siquiera sabía su nombre");
            break;
        case 32:
            $(p).text("He tenido sexo en un vehiculo");
            break;
        case 33:
            $(p).text("He tenido sexo en una pileta");
            break;
        case 34:
            $(p).text("He tenido sexo anal");
            break;
        case 35:
            $(p).text("He tenido sexo en la casa de un amigue");
            break;
        case 36:
            $(p).text("He tenido una experiencia paranormal");
            break;
        case 37:
            $(p).text("Escuche a mis tutores teniendo sexo");
            break;
        case 38:
            $(p).text("Pase un susto de embarazo");
            break;
        case 39:
            $(p).text("Vomite un vehiculo ajeno");
            break;
        case 40:
            $(p).text("Encontre a otres teniendo relaciones");
            break;
        case 41:
            $(p).text("Le quite la virginidad a nadie");
            break;
        case 42:
            $(p).text("Trage semen");
            break;
        case 43:
            $(p).text("Estuve con un familiar");
            break;
        case 44:
            $(p).text("Me masturbe al aire libre");
            break;
        case 45:
            $(p).text("Tuve sexo con nadie de este grupo");
            break;
        case 46:
            $(p).text("Perdí mil pesos en un casino");
            break;
        case 47:
            $(p).text("Tuve sexo en un baño");
            break;
        case 48:
            $(p).text("Consumi una droga ilegal con mis tutores");
            break;
        case 49:
            $(p).text("Tuve sexo");
            break;
        case 50:
            $(p).text("Me le insinue a alguien de este grupo");
            break;
        default:
            $(p).text('Ya no hay mas ""Yo Nunca". Juga otra cosa o quebra.');
            break;
    }
    numeroSwitch.splice(numAleatorio, 1);
    numMath--;
}