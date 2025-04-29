/**
 * Responsabilidad: gestionar los eventos
 * */ 
import { fizzBuzz } from "./fizzBuzz.js"

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let numUser = +document.getElementById("numUser").value;
    fizzBuzz(numUser)
});

