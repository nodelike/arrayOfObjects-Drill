//    Implement a loop to access and log the city and country of each individual in the dataset.
function logCityAndCountry(arrayOfObjects) {
    try {
      for (let i = 0; i < arrayOfObjects.length; i++) {
        const person = arrayOfObjects[i];
        console.log(`Name: ${person.name} | City: ${person.city} | Country: ${person.country}`);
      }
    } catch (error) {
      console.log(`Invalid input. ${error}`);
    }
}

module.exports.logCityAndCountry = logCityAndCountry;