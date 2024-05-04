//    Write a function that accesses and prints the names and email addresses of individuals aged 25.
function getPeopleAged25(arrayOfObjects) {
    try {
        for(let person of arrayOfObjects){
            if(person.age == 25){
                console.log(`Name: ${person.name}, Email: ${person.email}`);
            }
        }
    } catch (error) {
        console.log(`Invalid input. Error: ${error}`);
    }
    
}

module.exports.getPeopleAged25 = getPeopleAged25;