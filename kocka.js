var egyenleg = 10000;
var hazaviheto = 0;
var nyeremeny = 0;
var kockaertek;
var kor = 1;
var tesztkor = true;
var end = false;
var momentary_nyeremeny = 0;
//var form = new FormData(document.getElementById("form"));
function jatek(){
    if(!end){   
        let tet = document.getElementById("tet").value;
        if(isNaN(tet) || tet < 100 || tet > egyenleg){
            document.getElementById("vege").innerHTML = "Hibás bemenet! A minimum tét 100, a maximum az egyenleged értéke. Bemenet csak számformátumban!";
            return;
        }
        document.getElementById("vege").innerHTML = "";
        kor++;
        if(egyenleg && (kor < 3) && tesztkor){
            document.getElementById("korte").innerHTML = "Tesztkör: " + kor;
            kockaertek = getRandomInt(1,7);
                if(kockaertek >= 5){
                    egyenleg = egyenleg - tet;
                    nyeremeny = nyeremeny + 2*tet;
                    momentary_nyeremeny = 2*tet;
                    hazaviheto = egyenleg/2  + nyeremeny;
                    document.getElementById("szam").innerHTML = "Dobott szám: " +kockaertek;
                    document.getElementById("egyenleg").innerHTML = "Egyenleg: "+egyenleg;
                    document.getElementById("hazaviheto").innerHTML = "Hazavihető: "+ hazaviheto;
                    document.getElementById("nyeremeny").innerHTML = "Nyert összeg: "+ momentary_nyeremeny;
                    document.getElementById("nyertosszeg").innerHTML = "Játék során nyert pénzek összege: "+ nyeremeny;
                    if(egyenleg < 100){
                        document.getElementById("vege").innerHTML = " Ön sikeresen lejátszott két próbakört. Amennyiben nem értette meg a játék dinamikáját, kérem frissítse az oldalt olvassa el a tájékoztatót, és játszon le még két próbakört. Amennyiben átlátható a játék kérem lépjen vissza a kérdőívhez és válaszoljon a következő kérdésre. Elért eredménye : Egyenleg: " + egyenleg +  " Játék során nyert pénzek összege: " + nyeremeny +" Hazavihető: " + hazaviheto;

                        tesztkor = false;
                        egyenleg = 10000; 
                        nyeremeny = 0;
                        hazaviheto = 0;
                        momentary_nyeremeny = 0;
                        kor = 3;
                        document.getElementById("szam").innerHTML = "";
                        document.getElementById("korte").innerHTML = "Kör: "+ (kor-2);
                        document.getElementById("egyenleg").innerHTML = "Egyenleg: "+ egyenleg;
                        document.getElementById("hazaviheto").innerHTML = "Hazavihető: "+ hazaviheto;
                        document.getElementById("nyeremeny").innerHTML = "Nyert összeg: "+ momentary_nyeremeny;
                        document.getElementById("nyertosszeg").innerHTML = "Játék során nyert pénzek összege: "+ nyeremeny;
                        return;
                    }   
                }
                else{
                    egyenleg = egyenleg - tet;
                    hazaviheto = egyenleg/2  + nyeremeny;
                    momentary_nyeremeny = 0;
                    document.getElementById("szam").innerHTML = "Dobott szám: " + kockaertek;
                    document.getElementById("egyenleg").innerHTML = "Egyenleg: "+ egyenleg;
                    document.getElementById("hazaviheto").innerHTML = "Hazavihető: "+ hazaviheto;
                    document.getElementById("nyeremeny").innerHTML = "Nyert összeg: "+ momentary_nyeremeny;
                    document.getElementById("nyertosszeg").innerHTML = "Játék során nyert pénzek összege: "+ nyeremeny;
                    if(egyenleg < 100){
                        document.getElementById("vege").innerHTML = " Ön sikeresen lejátszott két próbakört. Amennyiben nem értette meg a játék dinamikáját, kérem frissítse az oldalt olvassa el a tájékoztatót, és játszon le még két próbakört. Amennyiben átlátható a játék kérem lépjen vissza a kérdőívhez és válaszoljon a következő kérdésre. Elért eredménye : Egyenleg: " + egyenleg +  " Játék során nyert pénzek összege: " + nyeremeny +" Hazavihető: " + hazaviheto;
                        tesztkor = false;
                        egyenleg = 10000; 
                        nyeremeny = 0;
                        hazaviheto = 0;
                        momentary_nyeremeny = 0;
                        kor = 3;
                        document.getElementById("szam").innerHTML = "";
                        document.getElementById("korte").innerHTML = "Kör: "+ (kor-2);
                        document.getElementById("egyenleg").innerHTML = "Egyenleg: "+ egyenleg;
                        document.getElementById("hazaviheto").innerHTML = "Hazavihető: "+ hazaviheto;
                        document.getElementById("nyeremeny").innerHTML = "Nyert összeg: "+ momentary_nyeremeny;
                        document.getElementById("nyertosszeg").innerHTML = "Játék során nyert pénzek összege: "+ nyeremeny;
                        return;
                    }   
                }
            }
            else if(tesztkor){
                egyenleg = egyenleg - tet;
                tesztkor = false;
                document.getElementById("vege").innerHTML = " Ön sikeresen lejátszott két próbakört. Amennyiben nem értette meg a játék dinamikáját, kérem frissítse az oldalt olvassa el a tájékoztatót, és játszon le még két próbakört. Amennyiben átlátható a játék kérem lépjen vissza a kérdőívhez és válaszoljon a következő kérdésre. Elért eredménye : Egyenleg: " + egyenleg + " Játék során nyert pénzek összege: " + nyeremeny +" Hazavihető: " + hazaviheto;
                egyenleg = 10000; 
                nyeremeny = 0;
                hazaviheto = 0;
                momentary_nyeremeny = 0;
                kor = 3;
                document.getElementById("szam").innerHTML = "";
                document.getElementById("korte").innerHTML = "Kör: "+ (kor-2);
                document.getElementById("egyenleg").innerHTML = "Egyenleg: "+ egyenleg;
                document.getElementById("hazaviheto").innerHTML = "Hazavihető: "+ hazaviheto;
                document.getElementById("nyeremeny").innerHTML = "Nyert összeg: "+ momentary_nyeremeny;
                document.getElementById("nyertosszeg").innerHTML = "Játék során nyert pénzek összege: "+ nyeremeny;
                return;
            }
        




        if(egyenleg && (kor < 9) && (kor >2)){
            document.getElementById("korte").innerHTML = "Kör: "+ (kor-2);
            kockaertek = getRandomInt(1,7);
            if(kockaertek >= 5){
                egyenleg = egyenleg - tet;
                nyeremeny = nyeremeny + 2*tet;
                hazaviheto = egyenleg/2 + nyeremeny;
                momentary_nyeremeny  = tet*2;
                document.getElementById("szam").innerHTML = "Dobott szám: " +kockaertek;
                document.getElementById("egyenleg").innerHTML = "Egyenleg: "+egyenleg;
                document.getElementById("hazaviheto").innerHTML = "Hazavihető: "+ hazaviheto;
                document.getElementById("nyeremeny").innerHTML = "Nyert összeg: "+ momentary_nyeremeny;
                document.getElementById("nyertosszeg").innerHTML = "Játék során nyert pénzek összege: "+ nyeremeny;

                if(egyenleg-tet <= 100){
                    
                    end = true;
                    document.getElementById("korte").innerHTML = "Kör: "+ (kor-2);
                    document.getElementById("vege").innerHTML = "Vége a játéknak, mert nincs több pénz az egyenlegén. Amennyiben szeretné újra próbálni, kérem frissítse az oldalt. Ha ez egy próba kör volt, akkor mindenképp próbálja újra a játékot";
                    return;
                } 
                
            }
            else{
                momentary_nyeremeny = 0;
                if(egyenleg-tet >=100){ 
                    egyenleg = egyenleg - tet;
                    hazaviheto = egyenleg/2 + nyeremeny;
                    document.getElementById("szam").innerHTML = "Dobott szám: " +kockaertek;
                    document.getElementById("egyenleg").innerHTML = "Egyenleg: "+egyenleg;  
                    document.getElementById("hazaviheto").innerHTML = "Hazavihető: "+ hazaviheto;
                    document.getElementById("nyeremeny").innerHTML = "Nyert összeg: "+ momentary_nyeremeny;
                    document.getElementById("nyertosszeg").innerHTML = "Játék során nyert pénzek összege: "+ nyeremeny;
                }
                    else if(egyenleg-tet < 100){
                    egyenleg = egyenleg - tet;
                    hazaviheto = egyenleg/2 + nyeremeny;
                    document.getElementById("szam").innerHTML = "Dobott szám: " +kockaertek;
                    document.getElementById("egyenleg").innerHTML = "Egyenleg: "+egyenleg;  
                    document.getElementById("hazaviheto").innerHTML = "Hazavihető: "+ hazaviheto;
                    document.getElementById("nyeremeny").innerHTML = "Nyert összeg: "+ momentary_nyeremeny;
                    document.getElementById("nyertosszeg").innerHTML = "Játék során nyert pénzek összege: "+ nyeremeny;
                    end = true;
                    document.getElementById("vege").innerHTML = "Vége a játéknak, mert nincs több pénz az egyenlegén. Amennyiben szeretné újra próbálni, kérem frissítse az oldalt. Ha ez egy próba kör volt, akkor mindenképp próbálja újra a játékot";
                    return;
                  
                 } 
            }
            if(kor == 8){
                end = true;
                document.getElementById("korte").innerHTML = "Játék Vége";
                document.getElementById("vege").innerHTML = "Vége a játéknak, mert nincs több pénz az egyenlegén. Amennyiben szeretné újra próbálni, kérem frissítse az oldalt. Ha ez egy próba kör volt, akkor mindenképp próbálja újra a játékot";
                return;
            }

        }
        else if(!tesztkor){
            document.getElementById("vege").innerHTML = "Vége a játéknak, mert nincs több pénz az egyenlegén. Amennyiben szeretné újra próbálni, kérem frissítse az oldalt. Ha ez egy próba kör volt, akkor mindenképp próbálja újra a játékot";
            end = true;
            return;
        }
    }

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  