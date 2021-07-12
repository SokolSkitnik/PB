//сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
function depositeCalculator(input) {
    let deposite = Number(input[0])
    let term = Number(input[1])
    let interest = Number(input[2])
    let result = deposite + term * ((deposite * interest/100)/12)
    console.log(result)
}
depositeCalculator(["200","3","5.7"])