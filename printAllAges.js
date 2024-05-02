//    Implement a loop to access and print the ages of all individuals in the dataset.
function printAllAges(arrayOfObjects) {
    try {
        for (let index = 0; index < arrayOfObjects.length; index++) {
            const person = arrayOfObjects[index];
            console.log(`Age: ${person.age}`);
        }
    } catch (error) {
        console.log(`Invalid input. ${error}`);
    }
}

module.exports.printAllAges = printAllAges;
 