function radiansToDegrees(imput){
    let radians = Number(imput[0])
    let degrees = radians * 180 / Math.PI
    console.log(degrees.toFixed(0));
}
radiansToDegrees(["6.2832"])