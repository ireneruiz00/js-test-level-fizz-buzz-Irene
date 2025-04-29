/**
 * Responsabilidad: gestionar el los flujos de que recibe y muestra la interfáz
 * */ 
import { fizzBuzz } from "./fizzBuzz.js"
import { historial } from "./fizzBuzz.js"

let numUser = parseInt(document.getElementById('numUser').value)
let resultDiv = document.getElementById('result')


resultDiv.innerHTML = fizzBuzz(numUser)

let historialDiv = document.getElementById('historial')
historialDiv.innerHTML = ''

historial.forEach((round) => historialDiv.innerHTML += round.toString())
