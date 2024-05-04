//    Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.
function getEmailAddresses(arrayOfObjects) {
    try {
        let emails = [];
        for(let person of arrayOfObjects){
            emails.push(person.email);
        }
        return emails;
    } catch (error) {
        console.log(`Invalid input. ${error}`);
    }
    
}

module.exports.getEmailAddresses = getEmailAddresses;