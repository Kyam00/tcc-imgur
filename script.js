var egg = 0
var imagem = 1;
const bd = document.getElementById("dire");
const ft = document.getElementById("ft");
const be = document.getElementById("esque");
const perso = document.getElementById("perso");
const b1 = document.getElementById("barata1");
function ranint(max){
    return(parseInt(Math.random()*max))
}

function abrir(){
    egg = ranint(5)
    console.log(egg)
    if (egg == 1){
        window.open("https://www.youtube.com", "_self")
    }
    else if (egg == 2){
        window.open("https://www.youtube.com", "_self")
    }
    else if (egg == 3){
        window.open("https://www.youtube.com", "_self")
    }
    else if (egg == 4){
        window.open("https://www.youtube.com", "_self")
    }
    else if (egg == 0){
        window.open("https://www.youtube.com", "_self")
    }
                }
function baratinha(){
    
    var visi = ranint(2)
    egg = visi
    console.log(visi)
    if (visi == 0){
        b1.style.opacity = 0;
    }
    else{
        b1.style.opacity = 255;
        console.log("certo")
        
    }
    
}
function proximg(){
    imagem = imagem + 1;
    console.log("socorro")
    if (imagem >= 3) {
        imagem = 1;
    }
    altimg()
    
}
function antimg(){
    imagem = imagem - 1
    console.log("socorrenos")
    if (imagem <= 0) {
        imagem = 2
    }
    altimg()
}
function altimg(){
    if (imagem == 1){
        ft.src = "https://i.imgur.com/vVzbKaQ.jpg";
        ft.alt = "Imagem do personagem oliver, um garoto de oito anos de idade com cabelo liso com as pontas enroladas, pele clara e olhos castanhos.";
        document.getElementById("nomep").innerText = "Olivier";
        document.getElementById("sap").innerText = "Saude: Saudável";
        document.getElementById("sanp").innerText = "Sanidade: Estável";
        document.getElementById("persp").innerText = "Personalidade: Timido";
        document.getElementById("habup").innerText = "??????????????????????????????????????????????????"
        document.getElementById("descp").innerText = "Um garoto timido que acabou se perdendo em um lugar desconhecido enquanto voltava da escola, um mundo completamente desconhecido onde acaba encontrando pessoas que podem se tornar possiveis amigos e muitos monstros no caminho."
    }
    else if (imagem == 2){
        ft.src = "https://i.imgur.com/6H3b0R5.png";
        ft.alt = "Imagem do personagem Kat, Kat é um garoto por volta dos oito anos com cabelos lisos escorridos, pele clara, utliza uma blusa que possui touca com orelha de gato, seus olhos estão escondidos pela touca.";
        document.getElementById("nomep").innerText = "Kat";
        document.getElementById("sap").innerText = "Saude: Moribunda";
        document.getElementById("sanp").innerText = "Sanidade: Estável";
        document.getElementById("persp").innerText = "Personalidade: Timido amigavel";
        document.getElementById("habup").innerText = "Copiar: Kat consegue copiar habilidades que ele viu nos ultimos um minutos e meio."
        document.getElementById("descp").innerText = "Um garoto que foi encontrado em uma casa abandonada, possui fobia social, porem de alguma forma, ainda tenta socializar com as poucas pessoas a sua volta"
    }
    }
bd.addEventListener("click", proximg);
be.addEventListener("click", antimg);
b1.addEventListener("click", () => abrir());
baratinha()