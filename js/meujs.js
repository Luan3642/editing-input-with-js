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

// faca um for step a cada 1 interacao deixa em UPER CASE

function alternUpperAndLower() {
    let vetor = []
    let caixa = document.getElementById("caixa")
    let texto = caixa.value
    if (texto.value != "") {
        document.getElementById("caixa").value = ""
        for(let i = 0; i<texto; i+=1){
            vetor[i] = texto.toUpperCase() 
            console.log(vetor)
        }

       
        
    }
}