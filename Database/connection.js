
const mongoose = require('mongoose');

// connect database 
const main = async () => {
	await mongoose.connect("mongodb+srv://digitalservicelab:DigitalServiceLab@cluster0.rqnozm0.mongodb.net/?retryWrites=true&w=majority")
	console.log("database connected");
}
export default main;
