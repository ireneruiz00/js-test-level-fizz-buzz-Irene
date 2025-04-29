/**
 * Responsabilidad: gestionar los eventos
 * */ 
import { fizzBuzz } from "./fizzBuzz.js"

const button = document.getElementById('submitInput')

button.addEventListener("click", fizzBuzz)

