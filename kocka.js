var egyenleg = 10000;
var hazaviheto = 0;
var nyeremeny = 0;
var kockaertek;
var kor = 1;
var tesztkor = true;
var end = false;
//var form = new FormData(document.getElementById("form"));
function jatek(){
    if(!end){   
        let tet = document.getElementById("tet").value;
        if(isNaN(tet) || tet < 100){
            document.getElementById("vege").innerHTML = "Hibás bemenet! A minimum tét 100, a maximum az egyenleged értéke. Bemenet csak számformátumban!";
            return;
        }
        document.getElementById("vege").innerHTML = " ";
        kor++
        if(egyenleg && (kor < 3) && tesztkor){
            document.getElementById("korte").innerHTML = "Tesztkör: " + kor;
            kockaertek = getRandomInt(1,7);
                if(kockaertek >= 5){
                    egyenleg = egyenleg;
                    nyeremeny = nyeremeny + 2*tet;
                    hazaviheto = egyenleg/2  + nyeremeny;
                    document.getElementById("szam").innerHTML = "Dobott szám: " +kockaertek;
                    document.getElementById("egyenleg").innerHTML = "Egyenleg: "+egyenleg;
                    document.getElementById("hazaviheto").innerHTML = "Hazavihető: "+ hazaviheto;
                }
                else{
                    egyenleg = egyenleg - tet;
                    hazaviheto = egyenleg/2  + nyeremeny;
                    document.getElementById("szam").innerHTML = "Dobott szám: " + kockaertek;
                    document.getElementById("egyenleg").innerHTML = "Egyenleg: "+ egyenleg;
                    document.getElementById("hazaviheto").innerHTML = "Hazavihető: "+ hazaviheto;
                    if(!egyenleg){
                        tesztkor = false;
                        document.getElementById("vege").innerHTML = "!"; 
                    }   
                }
            }
            else{
                tesztkor = false;
                document.getElementById("vege").innerHTML = " Ön sikeresen lejátszott két próbakört. Amennyiben nem értette meg a játék dinamikáját, kérem frissítse az oldalt olvassa el a tájékoztatót, és játszon le még két próbakört. Amennyiben átlátható a játék kérem lépjen vissza a kérdőívhez és válaszoljon a következő kérdésre.";
            }
        




        if(!tesztkor){
            egyenleg = 10000;   
            nyeremeny = 0;
            hazaviheto = 0;
        }


        if(egyenleg && (kor < 8) && (kor >2)){
            document.getElementById("korte").innerHTML = "Kör: "+ (kor-2);
            kockaertek = getRandomInt(1,7);
            if(kockaertek >= 5){
                egyenleg = egyenleg;
                nyeremeny = nyeremeny + 2*tet;
                hazaviheto = egyenleg/2 + nyeremeny;
                document.getElementById("szam").innerHTML = "Dobott szám: " +kockaertek;
                document.getElementById("egyenleg").innerHTML = "Egyenleg: "+egyenleg;
                document.getElementById("hazaviheto").innerHTML = "Hazavihető: "+ hazaviheto;
            }
            else{
                if(egyenleg-tet >=0){
                    egyenleg = egyenleg - tet;
                    hazaviheto = egyenleg/2 + nyeremeny;
                    document.getElementById("szam").innerHTML = "Dobott szám: " +kockaertek;
                    document.getElementById("egyenleg").innerHTML = "Egyenleg: "+egyenleg;  
                    document.getElementById("hazaviheto").innerHTML = "Hazavihető: "+ hazaviheto;
                }
                else if(egyenleg-tet == 0){
                    egyenleg = 0;
                    end = true;
                }   
            }
        }
        else if(!tesztkor){
            document.getElementById("vege").innerHTML = "Vége a játéknak, kérlek mentsd el az elért eredményed!";
            end = true;
        }
    }

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  