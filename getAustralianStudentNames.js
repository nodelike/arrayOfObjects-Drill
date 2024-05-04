//    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.
function getAustralianStudentNames(arrayOfObjects) {
    try{
        const names = [];
        for(let person of arrayOfObjects){
            if(person.isStudent && person.country == "Australia"){
                names.push(person.name);
            }
        }
        console.log(`Names of Australian students: ${names.join(', ')}`);
    } catch (error) {
        console.log(`Invalid input. ${error}`);
    }
    
}

module.exports.getAustralianStudentNames = getAustralianStudentNames;