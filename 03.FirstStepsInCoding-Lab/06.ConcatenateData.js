function concatenateData(imput){
    let firstName =imput[0];
    let secondName=imput[1];
    let age = Number(imput[2]);
    let city = imput[3];
    console.log(`You are ${firstName} ${secondName}, a ${age}-years old person from ${city}.`);
}
concatenateData(['Maria', 'Ivanova', '20', 'Sofia'])