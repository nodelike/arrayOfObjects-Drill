//    Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.
function getHobbiesForAge(arrayOfObjects, age) {
    try {
        for(let person of arrayOfObjects){
            if(person.age == age){
                console.log(`${person.name}'s hobbies (${age} years old): ${person.hobbies.join(', ')}`);
            }
        }
    } catch (error) {
        console.log(`Invalid input. ${error}`);
    }
}

module.exports.getHobbiesForAge = getHobbiesForAge;