//    Create a function to retrieve and display the first hobby of each individual in the dataset.
function getFirstHobbyForEach(arrayOfObjects) {
    try {
        arrayOfObjects.forEach(person => {
            console.log(`${person.name}'s first hobby: ${person.hobbies[0]}`);
        });
    } catch (error) {
        console.log(`Invalid input. ${error}`);
    }   
    
}

module.exports.getFirstHobbyForEach = getFirstHobbyForEach;