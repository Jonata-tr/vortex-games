const bannerImagePath = [
    "./img/banners/horizon-banner.png",
    "./img/banners/yakuza-banner.png",
    "./img/banners/mine-banner.png",
];

// Guarda o cronometro e o index do banner atual
let index = 0;
let intervalo;

let body_bg = document.querySelector("body");

document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => {
    changeBanner(button.value);
    changeButtonColor(button);
    resetBannerTimer() // No quotes, gets the button's value
  });
});

// Muda o botão baseado no banner ativo no momento
function changeButtonColor(button){
    document.querySelectorAll(".button").forEach((button, i) => {
        if(index === i){
            button.classList.add('active')
        
        } else {
            button.classList.remove('active')
        }
    })
}

// VAI MUDAR O INDEX DO BANNER ATUAL APOS O CLICK<]
function changeBanner(banner) {
    switch (banner) {
        case "firstBanner":
            index = 0;
            break;
        case "secondBanner":
            index = 1;
            break;
        case "thirdBanner":
            index = 2;
            break;
    }
    body_bg.style.backgroundImage = `url("${bannerImagePath[index]}")`;
}

function nextBanner() {
    // Loop infinito da lista, que tambem altera o botã
    index = (index + 1) % bannerImagePath.length; 
    changeButtonColor()
    body_bg.style.backgroundImage = `url("${bannerImagePath[index]}")`;
}

// Troca o banner a cada X segundos (atualmente 10seg)
function resetBannerTimer() {
    clearInterval(intervalo);
    intervalo = setInterval(nextBanner, 6000);
}

resetBannerTimer();

// O numero dos mais vendidos
const topContagem = document.querySelectorAll(".game-card[data-top-position]")

topContagem.forEach((card, i) =>{
    card.style.setProperty("--posicao", `"${i}"`);
})


// Fundo do menu ao scrollar
const header = document.querySelector("header")
let ultimaPosicao = 0;
let scrollSubindo = 0;
const headerMinimoSumir = 150;

window.addEventListener("scroll", () => {
    let posicaoAtual = (position =
      window.pageYOffset || document.documentElement.scrollTop);

    if (posicaoAtual < 0) return;

    // Se a rolagem atual for maior que a última, o usuário está descendo
    if (posicaoAtual < ultimaPosicao && posicaoAtual > 600) {
         totalSubido += ultimaPosicao - posicaoAtual;

        if(totalSubido > headerMinimoSumir){
            header.classList.add("hidde-header");
        }
        
    } else {
        // Se for menor, o usuário está subindo
        totalSubido = 0
        header.classList.remove("hidde-header");
    }
    
    
    if(window.scrollY > 10) header.classList.add("moving")
        else header.classList.remove("moving")
    
    console.log("total = " + totalSubido);
    return ultimaPosicao = posicaoAtual
})

