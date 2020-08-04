function uper() {
    let caixa = document.getElementById("caixa")
    let texto = caixa.value
    if (texto.value != "") {
        document.getElementById("caixa").value = ""
        let joga = document.getElementById("joga")
        caixa.value = texto.toUpperCase()
    }

}

function lower() {
    let caixa = document.getElementById("caixa")
    let texto = caixa.value
    if (texto.value != "") {
        document.getElementById("caixa").value = ""
        let joga = document.getElementById("joga")
        caixa.value = texto.toLowerCase()
    }

}

function camelCase() {
    let caixa = document.getElementById("caixa")
    let texto = caixa.value
    if (texto.value != "") {
        document.getElementById("caixa").value = ""
        let camel = texto.substr(0, 1).toUpperCase()
        let nome = texto.substr(1)
        let junta = camel + nome
        caixa.value = junta
    }
}

function deleteSpace() {
    let caixa = document.getElementById("caixa")
    let texto = caixa.value
    if (texto.value != "") {
        document.getElementById("caixa").value = ""
        let separa = texto.split(" ")
        let junta = separa.join("")
        caixa.value = junta
    }
}

function underline() {
    let caixa = document.getElementById("caixa")
    let texto = caixa.value
    if (texto.value != "") {
        document.getElementById("caixa").value = ""
        let separa = texto.split(" ")
        let junta = separa.join("_")
        caixa.value = junta
    }
}

function alternUpperAndLower() {
    let caixa = document.getElementById("caixa")
    let texto = caixa.value
    let textoFinal = []
    if (texto.value != "") {
        document.getElementById("caixa").value = ""
        let juntaTexto = texto.split(" ")
        let arrumaTexto = juntaTexto.join("")
        for (let i = 0; i < arrumaTexto.length; i += 2) {
            for (let j = 1; j < arrumaTexto.length; j += 2) {
                textoFinal[i] = arrumaTexto[i].toUpperCase()
                textoFinal[j] = arrumaTexto[j].toLowerCase()
            }
        }
        const valor = textoFinal.join("");
        caixa.value = valor

    }
}

function deleteWorlds() {
    let caixa = document.getElementById("caixa")
    let texto = caixa.value
    let textoFinal = []
    if (texto.value != "") {
        document.getElementById("caixa").value = ""
        for (let elemento in texto) {
            if (elemento < 3) {
                caixa.value = "";
            } else {
                caixa.value = texto;
            }
        }

    }
}

//First Button
$(document).ready(function () {
    // Bounce button
    $("#animatebutton").click(function () {
        const element = document.querySelector('.animatebutton');
        element.classList.add('animated', 'tada');
        setTimeout(function () {
            element.classList.remove('tada');
        }, 1000);
    });

});

//Second button 
$(document).ready(function () {
    // Bounce button
    $("#animatebuttonSecond").click(function () {
        const element = document.querySelector('.animatebuttonSecond');
        element.classList.add('animated', 'tada');
        setTimeout(function () {
            element.classList.remove('tada');
        }, 1000);
    });

});

//Three button 
$(document).ready(function () {
    // Bounce button
    $("#animatebuttonThree").click(function () {
        const element = document.querySelector('.animatebuttonThree');
        element.classList.add('animated', 'tada');
        setTimeout(function () {
            element.classList.remove('tada');
        }, 1000);
    });

});

//FourButton
$(document).ready(function () {
    // Bounce button
    $("#animatebuttonFour").click(function () {
        const element = document.querySelector('.animatebuttonFour');
        element.classList.add('animated', 'tada');
        setTimeout(function () {
            element.classList.remove('tada');
        }, 1000);
    });

});

//FiveButton
$(document).ready(function () {
    // Bounce button
    $("#animatebuttonFive").click(function () {
        const element = document.querySelector('.animatebuttonFive');
        element.classList.add('animated', 'tada');
        setTimeout(function () {
            element.classList.remove('tada');
        }, 1000);
    });

});

//SixButton
$(document).ready(function () {
    // Bounce button
    $("#animatebuttonSix").click(function () {
        const element = document.querySelector('.animatebuttonSix');
        element.classList.add('animated', 'tada');
        setTimeout(function () {
            element.classList.remove('tada');
        }, 1000);
    });

});

//SevenButton
$(document).ready(function () {
    // Bounce button
    $("#animatebuttonSeven").click(function () {
        const element = document.querySelector('.animatebuttonSeven');
        element.classList.add('animated', 'tada');
        setTimeout(function () {
            element.classList.remove('tada');
        }, 1000);
    });

});


// dark mode

const btn = document.querySelector(".btn-toggle");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});
