var egyenleg = 10000;
var kockaertek;
var kor = 1;
var tesztkor = true;
var end = false;
//var form = new FormData(document.getElementById("form"));
function jatek(){
    if(!end){
        let tet = document.getElementById("tet").value;
    
        if(egyenleg && (kor < 3) && tesztkor){
            document.getElementById("korte").innerHTML = "Tesztkör: "+ kor;
            kockaertek = getRandomInt(1,7);
                if(kockaertek >= 5){
                    egyenleg = egyenleg/2 + 2*tet;
                    document.getElementById("szam").innerHTML = "Dobott szám: " +kockaertek;
                    document.getElementById("egyenleg").innerHTML = "Egyenleg: "+egyenleg;
                }
                else{
                    egyenleg = egyenleg - tet;
                    document.getElementById("szam").innerHTML = "Dobott szám: " + kockaertek;
                    document.getElementById("egyenleg").innerHTML = "Egyenleg: "+ egyenleg;
                    if(!egyenleg){
                        tesztkor = false;
                        document.getElementById("vege").innerHTML = "Vége a kettő próbakörnek, mostantól élesben megy!"; 
                    }   
                }
            }
            else{
                tesztkor = false;
                document.getElementById("vege").innerHTML = "Vége a kettő próbakörnek, mostantól élesben megy!";
            }
        




        if(!tesztkor){
            egyenleg = 10000;
        }


        if(egyenleg && (kor < 8) && (kor >2)){
            document.getElementById("korte").innerHTML = "Kör: "+ (kor-2);
            kockaertek = getRandomInt(1,7);
            if(kockaertek >= 5){
                egyenleg = egyenleg/2 + 2*tet;
                document.getElementById("szam").innerHTML = "Dobott szám: " +kockaertek;
                document.getElementById("egyenleg").innerHTML = "Egyenleg: "+egyenleg;
            }
            else{
                if(egyenleg-tet >=0){
                    egyenleg = egyenleg - tet;
                    document.getElementById("szam").innerHTML = "Dobott szám: " +kockaertek;
                    document.getElementById("egyenleg").innerHTML = "Egyenleg: "+egyenleg;  
                }
                else if(egyenleg-tet == 0){
                    egyenleg = 0;
                    end = true;
                }   
            }
        }
        else if(!egyenleg){
            document.getElementById("vege").innerHTML = "Vége a játéknak, kérlek mentsd el az elért eredményed!";
            end = true;
        }
        kor++;
    }

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  