// Funcao para classificar o rank do heroi
function rankHeroi () {

    //Armazenamento do nome e a quantidade de XP do heroi
    let nome = document.getElementById('nome').value;
    let experiencia = parseInt(document.getElementById('xp').value);
    let resultadoDiv = document.getElementById('resultado');

    // Validacao dos campos
    if  (!nome) {
        resultadoDiv.textContent = "Por favor, insira o nome do herói.";
        resultadoDiv.style.color = "red";
        return;
    }
    if (isNaN(experiencia) || experiencia < 0) {
        resultadoDiv.textContent = "Por favor, insira um valor válido de XP.";
        resultadoDiv.style.color = "red";
        return;
    }

    //Armazenamento do nivel do heroi
    let nivel;

    //Estrutura de classificacao
    if (experiencia < 1000) {
        nivel = "Ferro";
    } else if (experiencia <= 2000) {
        nivel = "Bronze";
    } else if (experiencia <= 5000) {
        nivel = "Prata";
    } else if (experiencia <= 7000) {
        nivel = "Ouro";
    } else if (experiencia <= 8000) {
        nivel = "Platina";
    } else if (experiencia <= 9000) {
        nivel = "Ascendente";
    } else if (experiencia <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    //Saida
    resultadoDiv.textContent = `O Herói ${nome} está no nível ${nivel}`
    resultadoDiv.style.color = "black";

    // Chama funcao para mudar background
    mudarFundo(nivel);
}

//Fundo altera de acordo com o nivel do heroi
function mudarFundo(nivel) {
    let body = document.body;

    switch (nivel) {
        case "Ferro":
            body.style.backgroundColor = "#a9a9a9";
            break;
        case "Bronze":
            body.style.backgroundColor = "#cd7f32"; // Bronze
            break;
        case "Prata":
            body.style.backgroundColor = "#c0c0c0"; // Prata
            break;
        case "Ouro":
            body.style.backgroundColor = "#ffd700"; // Dourado
            break;
        case "Platina":
            body.style.backgroundColor = "#e5e4e2"; // Platina
             break;
        case "Ascendente":
            body.style.backgroundColor = "#b8f1b0"; // Verde claro
            break;
        case "Imortal":
            body.style.backgroundColor = "#ff4500"; // Laranja
            break;
        case "Radiante":
            body.style.backgroundColor = "#ff1493"; // Rosa choque
            break;
        default:
            body.style.backgroundColor = "#FFFFFF"; // Branco
    }
}