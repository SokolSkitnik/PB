function charity (input){
    let days = Number(input[0])
    let cheffs = Number(input[1])
    let cakes = 45 * Number(input[2])
    let waffles = 5.80 * Number(input[3])
    let pancakes = 3.20 * Number(input[4])
    let moneyFromOneDay = cheffs * (cakes+waffles+pancakes)
    let sumOfAllCheffs = moneyFromOneDay * days
    result = sumOfAllCheffs - (sumOfAllCheffs / 8)
    console.log(result)
}
charity(["131","5","9","33","46"])