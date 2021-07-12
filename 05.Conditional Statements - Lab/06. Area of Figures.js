function areaofFigures (input){
    let figure = input[0]
    let firstNumber = Number(input[1])
    let secondNumber = Number(input[2])
    let result = 0
    if(figure === "square"){
        result += firstNumber*firstNumber
    }
    else if(figure === "rectangle"){
        result += firstNumber* secondNumber
    }
    else if (figure === "circle"){
        result = 18.8495 *  firstNumber
    }
    else if(figure === "triangle"){
        result =  (firstNumber*secondNumber) / 2
    }
    console.log(result.toFixed(3))
}
areaofFigures(["circle","6","0"])