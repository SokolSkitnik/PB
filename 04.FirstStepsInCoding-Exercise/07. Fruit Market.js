function fruitMarket (input){
    let strawberryPrice = Number(input[0])
    let bannanaKG = Number(input[1])
    let orangeKG = Number(input[2])
    let raspberriesKG = Number(input[3])
    let strawberriesKG = Number(input[4])
    let raspberriesPrice = strawberryPrice / 2
    let bannanaPrice = raspberriesPrice * 20 / 100
    let orangePrice = raspberriesPrice * 60 / 100
    
    let result = ((bannanaKG*bannanaPrice)+(orangeKG*orangePrice)+(raspberriesKG*raspberriesPrice)+(strawberriesKG*strawberryPrice))

    console.log(result)
}
fruitMarket(["63.5","3.57","6.35","8.15","2.5"])