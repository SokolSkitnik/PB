function yardGreening(imput){

    let squareeMeter = Number(imput[0])
    let price = (7.61*squareeMeter) 
    let discount = (0.18*price)
    let finalPrice = (price - discount)
    console.log(`The final price is: ${finalPrice} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}
yardGreening(["150"])





