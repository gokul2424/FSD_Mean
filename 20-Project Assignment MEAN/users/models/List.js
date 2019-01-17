
//Require mongoose package
const mongoose = require('mongoose');

//Define UserListSchema with title, description and category
const UserListSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: String,
    SSID: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
});

//Create a model using mongoose.model and export it
const UserList = module.exports = mongoose.model('UserList', UserListSchema );


//UserList.find() returns all the lists
module.exports.getAllLists = (callback) => {
	UserList.find(callback);
}

//newList.save is used to insert the document into MongoDB
module.exports.addList = (newList, callback) => {
	newList.save(callback);
}


//We pass on an id and remove it from DB using UserList.remove()
module.exports.deleteListById = (id, callback) => {
	let query = {_id: id};
	UserList.remove(query, callback);
}

