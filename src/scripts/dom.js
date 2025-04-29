/**
 * Responsabilidad: gestionar el los flujos de que recibe y muestra la interfáz
 * */ 
import { fizzBuzz } from "./fizzBuzz.js"

let numUser = parseInt(document.getElementById('numUser').value)
let resultDiv = document.getElementById('result')
let historialDiv = document.getElementById('historial')

resultDiv.innerHTML = fizzBuzz(numUser)
