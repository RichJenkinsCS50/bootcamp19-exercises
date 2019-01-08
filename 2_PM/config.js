// TODO: Add Google API key here - first hardcoded, then as environment variable.
const dotenv = require('dotenv')
dotenv.config()

console.log(process.env.ENV_VARIABLE)

const config = {API_KEY: 'AIzaSyBXGSsSDuDecaYMwfAbE54T0VzM5Sm6cbo'};

module.exports = config 
