//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.
function getEmailAddresses(arrayOfObjects) {
    try {
        return arrayOfObjects.map(person => person.email);
    } catch (error) {
        console.log(`Invalid input. ${error}`);
    }
    
}

module.exports.getEmailAddresses = getEmailAddresses;