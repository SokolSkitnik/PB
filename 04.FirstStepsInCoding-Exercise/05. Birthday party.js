function birthday (input){
    let rent = Number(input[0])
    let cake = rent * 20 / 100
    let drinks = cake * 55 / 100
    let animator = rent / 3
    let result = (rent+cake+drinks+animator)
    console.log(result)
}
birthday(["3720"])