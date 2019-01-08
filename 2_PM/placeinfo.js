/* TODO: Write a program which takes in a place name via the command line and 
/ returns the following string, formatted with the appropriate values:

'INPUTTED_PLACE is located at coordinates RETURNED_COORDINATES, at the address RETURNED_ADDRESS.' */
const googleMapsClient = require('./google_api.js')

googleMapsClient.findPlace({input: process.argv[2], inputtype: 'textquery'}).asPromise()
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });