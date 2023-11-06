

//função: para definir grupos de idade conforme idade mostrada;
const myFunction = () => {
    const rIdade = document.getElementById("idade").value;
    if(rIdade > 0 && rIdade <=25) {
        const x = "Adolescente";
        document.getElementById("resultado").innerHTML = x;
    } else if (rIdade > 25 && rIdade <= 40) {
        const y = "Jovem Adulto";
        document.getElementById("resultado").innerHTML = y;
    } else if (rIdade > 40 && rIdade <= 60) {
        const i = "Adulto";
        document.getElementById("resultado").innerHTML = i;
    } else if (rIdade > 60 && rIdade <= 115) {
        const m = "Idoso";
        document.getElementById("resultado").innerHTML = m;
}
}

//função: 
const chooseImg = () => {
    const imgDaArt = document.getElementsByName("letrux").value;
    if(imgDaArt === document.getElementById("prantos").value) {
       
        document.getElementById("imgEscolhida").innerHTML = "<img src='imagem/art01.jpg' alt='arte da letrux'>"

    } else
    if(imgDaArt === document.getElementById("climao").value){
         document.getElementById("imgEscolhida").innerHTML = "<img src='imagem/art02.jpg' alt='arte da letrux'>"

    } else
    if(imgDaArt === document.getElementById("mGirafa").value) {
        
         document.getElementById("imgEscolhida").innerHTML.imgDaArt = "<img src='imagem/art03.jpg' alt='arte da letrux'>"

    }
}


