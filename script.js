let buttonNo = document.querySelector('#buttonNo');
let tentativas = 0;
buttonNo.onmouseover = trocarLugar;
buttonNo.onclick = parabens;

let buttonYes = document.querySelector('#buttonYes');
buttonYes.onclick = alegrarSe;

function trocarLugar(){
    tentativas++;
    buttonNo.style.left = Math.floor(Math.random() * 75) + '%';
    buttonNo.style.top = Math.floor(Math.random() * 90) + '%';
    console.log(buttonNo.style.left);
    console.log(buttonNo.style.top);
}

function alegrarSe(){
    window.open("https://www.youtube.com/watch?v=ZODl2JFl_og&ab_channel=MisterTOBYHEADOG%F0%9F%96%A4");
}

function parabens(){
    alert("Parabéns, depois de "+ tentativas+" tentativas ficou claro que tu me odeia mesmo...");
}
