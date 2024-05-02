//    Write a function that accesses and prints the names and email addresses of individuals aged 25.
function getPeopleAged25(arrayOfObjects) {
    try {
        const peopleAged25 = arrayOfObjects.filter(person => person.age === 25);
        peopleAged25.forEach(person => {
            console.log(`Name: ${person.name}, Email: ${person.email}`);
        });
    } catch (error) {
        console.log(`Invalid input. Error: ${error}`);
    }
    
}

module.exports.getPeopleAged25 = getPeopleAged25;