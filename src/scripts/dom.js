/**
 * Responsabilidad: gestionar el los flujos de que recibe y muestra la interfáz
 * */ 
import { fizzBuzz } from "./fizzBuzz.js"
import { record } from "./fizzBuzz.js"

let numUser = parseInt(document.getElementById('numUser').value)
let resultDiv = document.getElementById('result')

let result = fizzBuzz(numUser)
resultDiv.innerHTML = result.data.output

let recordDiv = document.getElementById('record')
recordDiv.innerHTML = ''

record.forEach((round) => recordDiv.innerHTML += round.toString())
