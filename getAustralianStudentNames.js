//    Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.
function getAustralianStudentNames(arrayOfObjects) {
    try{
        const australianStudents = arrayOfObjects.filter(person => person.isStudent && person.country === 'Australia');
        const names = australianStudents.map(student => student.name);
        console.log(`Names of Australian students: ${names.join(', ')}`);
    } catch {
        console.log("Invalid input.")
    }
    
}

module.exports.getAustralianStudentNames = getAustralianStudentNames;