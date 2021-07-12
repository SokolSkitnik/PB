function fishtank (imput){
    let lenght = Number(imput[0])
    let width = Number(imput[1])
    let height = Number(imput[2])
    let percent = Number(imput[3])
    let capacity = lenght*width*height
    let litters = capacity * 0.001
    let usedSpace = percent * 0.01
    let result=litters*(1-usedSpace)

    console.log(result)
}
fishtank(["85","75","47","17"])