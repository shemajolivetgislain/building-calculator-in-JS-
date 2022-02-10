class Calculator {
    constructor(previousOperandTextElement, curentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.curentOperandTextElement = curentOperandTextElement
        this.clear
    }

    clear(){
        this.curentOperand = ''
        this.previousOperand = ''
        this.operation = undefined

    }
    delete(){

    }
    appendNumber(number){
        this.curentOperand = number

    }
    chooseOperation(operation){

    }
    compute(){

    }

    updateDisplay()
    {
      this.curentOperandTextElement.innerText = this.curentOperand
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalButtons = document.querySelector('[data-equals]')
const operationButtons = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-preious-operand]')
const curentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement,curentOperandTextElement)

numberButtons.forEach(buttons =>{
    buttons.addEventListener('click', () =>
    {
        calculator.appendNumber(buttons.innerText)
        calculator.updateDisplay()
    })

})