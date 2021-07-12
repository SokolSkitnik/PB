function projectCreation(imput){

    let architect = imput[0]
    let hoursNeed =3*imput[1]
    let projectsNumber=Number(imput[1])
    console.log(`The architect ${architect} will need ${hoursNeed} hours to complete ${projectsNumber} project/s.`)
}
projectCreation(["George","4"])