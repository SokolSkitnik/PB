function password (input){
    let password = input[0]
    if(password != "s3cr3t!P@ssw0rd"){
        console.log("Wrong password!")
    }  else {
        console.log("Welcome")
    }
}
password(["qwerty"])