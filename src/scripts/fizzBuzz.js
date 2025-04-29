/**
 * Responsabilidad: gestionar la lógica de FizzBuzz
 * Recuerda que la estructura de las respuestas debe ser estructurada:
 *  {
        status: "", // Código indicando éxito o error
        message: "", // Mensaje
        data: {
            number: 0, // Número evaluado
            result: "" // Resultado esperado
            }
    }
 * */ 
export let historial = []

class Round {
    constructor(numUser, result) {
        this._numUser = numUser
        this._result = result
    }

    toString() {
        return `Número enviado: ${this._numUser} - Resultado: ${this._result}<br>`
    }
}

export let fizzBuzz = (numUser) => {

    let response = {
        status: "ok", 
        message: "", 
        data: {
            input: numUser,  
            output: "" 
        }}

    try{
        if(isNaN(numUser)) {
            response.status = 'error'
            response.message = 'input is not a number'
            response.data.input = null
            response.data.output = ''
        }
    
        if(numUser % 3 === 0 && numUser % 5 === 0) {
            response.message = 'El número es divisible por 3 y 5'
            response.output = 'FizzBuzz'
        } else if(numUser % 3 === 0) {
            response.message = 'El número es divisible por 3'
            response.output = 'Fizz'
        } else if (numUser % 5 === 0){
            response.message = 'El número es divisible por 5'
            response.output = 'Buzz'
        } else {
            response.message = 'El número no es divisible por 3 ni 5'
            response.output = numUser
        }
    
        historial.push(new Round(numUser, response.output))
        
    } catch(error) {
        response.status = 'error'
        response.message = error.message
        response.data.input = null
        response.data.output = ''
    }

    return response
}
