/**
 * Responsabilidad: gestionar los eventos
 * */ 
import { input, resultDiv, recordDiv } from "./dom.js";
import { fizzBuzz, record } from "./fizzBuzz.js"


const form = document.getElementById('form')

form.addEventListener("submit", (event) => {
    event.preventDefault(); //bloqueas envio formulario
    const numUser = parseInt(input.value)
    const result = fizzBuzz(numUser)
    resultDiv.innerHTML = result.data.output
    recordDiv.innerHTML = ''
    record.forEach((round) => recordDiv.innerHTML += round.toString())
    input.value = ''
});

