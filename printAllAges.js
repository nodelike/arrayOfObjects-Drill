//    Implement a loop to access and print the ages of all individuals in the dataset.
function printAllAges(arrayOfObjects) {
    try {
        for (let i = 0; i < arrayOfObjects.length; i++) {
            const person = arrayOfObjects[i];
            console.log(`Age: ${person.age}`);
        }
    } catch (error) {
        console.log(`Invalid input. ${error}`);
    }
}

module.exports.printAllAges = printAllAges;
 