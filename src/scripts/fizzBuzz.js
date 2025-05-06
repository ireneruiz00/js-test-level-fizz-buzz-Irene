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

export const record = []

class Round {
    constructor(numUser, result) {
        this._numUser = numUser
        this._result = result
    }

    toString() {
        return `Number submitted: ${this._numUser} - Result: ${this._result}<br>`
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
            response.message = 'Input is not a number'
            response.data.input = null
            response.data.output = ''
        }
    
        if(numUser % 3 === 0 && numUser % 5 === 0) {
            response.message = 'The number is divisible by 3 and 5'
            response.data.output = 'FizzBuzz'
        } else if(numUser % 3 === 0) {
            response.message = 'The number is divisible by 3'
            response.data.output = 'Fizz'
        } else if (numUser % 5 === 0){
            response.message = 'The number is divisible by 5'
            response.data.output = 'Buzz'
        } else {
            response.message = 'The number is not divisible by 3 nor 5'
            response.data.output = numUser
        }
    
        record.push(new Round(numUser, response.data.output))

    } catch(error) {
        response.status = 'error'
        response.message = error.message
        response.data.input = null
        response.data.output = ''
    }

    return response
}
