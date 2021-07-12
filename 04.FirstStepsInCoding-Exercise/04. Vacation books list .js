function vacationBook (input){
    let pages = Number(input[0])
    let pagesForHour = Number(input[1])
    let days = Number(input[2])
    let wholeBookHours = pages / pagesForHour
    let hoursForDay = wholeBookHours / days
    console.log(hoursForDay)
}
vacationBook(["432","15","4"])