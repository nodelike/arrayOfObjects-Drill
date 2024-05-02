//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.
function getPersonAtIndex3(arrayOfObjects) {
    try {
        const person = arrayOfObjects[3];
        console.log(`Name: ${person.name}, City: ${person.city}`);
    } catch (error) {
        console.log(`Invalid input. ${error}`);
    }
    
}

module.exports.getPersonAtIndex3 = getPersonAtIndex3;