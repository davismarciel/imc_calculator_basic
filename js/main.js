
// Form construction, catching submit event and throwing errors
const form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if(!peso) {
        setResult('Peso inválido!', false)
        return
    }

    if(!altura) {
        setResult('Altura inválida!', false)
        return
    }
    
    /* 

    FOR FUTURE ADDING OF A NEW FUNCTION TO CHECK AGE AND DETERMINE IF CORRELATES TO THE IMC
    
    const inputIdade = e.target.querySelector('#idade')
    const idade = Number(inputIdade.value)
    if(!idade) {
        setResult('Idade inválida!', false)
        return
    } 
    */

    const imc = getImc(peso, altura)
    const nivelImc = classficationImc(imc)

    const msg = `IMC: ${imc} (${nivelImc})`

    setResult(msg, true)
    
})


// Calculate IMC

function getImc(peso, altura) {
    const imc = peso / altura**2
    return imc.toFixed(2)
}

// IMC classifications

function classficationImc (imc) {
    const grades = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9) {return grades[5]}
    if (imc >= 34.9) {return grades[4]}
    if (imc >= 29.9) {return grades[3]}
    if (imc >= 24.9) {return grades[2]}
    if (imc >= 18.5) {return grades[1]}
    if (imc < 18.5) {return grades[0]}
}

// Create a paragraph to show the results

function createP() {
    const p = document.createElement('p')
    return p
}

// Function to select and show the results messages

function setResult(msg, isValid) {
    const result = document.querySelector('#result')
    result.innerHTML = ''

    const p = createP()
    p.innerHTML = msg
    result.appendChild(p)

    if(isValid) {
        p.classList.add('valid')
    } else {
        p.classList.add('notValid')
    }
}
