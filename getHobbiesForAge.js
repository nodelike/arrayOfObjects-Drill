//    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.
function getHobbiesForAge(arrayOfObjects, age) {
    try {
        const personsWithAge = arrayOfObjects.filter(person => person.age === age);
        personsWithAge.forEach(person => {
            console.log(`${person.name}'s hobbies (${age} years old): ${person.hobbies.join(', ')}`);
        });
    } catch (error) {
        console.log(`Invalid input. ${error}`);
    }
}

module.exports.getHobbiesForAge = getHobbiesForAge;