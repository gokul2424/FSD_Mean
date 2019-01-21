//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const userlist = require('../models/List');


//GET HTTP method to /userlist
router.get('/',(req,res) => {
	userlist.getAllLists((err, lists)=> {
		if(err) {
			res.json({success:false, message: `Failed to load all lists. Error: ${err}`});
		}
		else {
			res.write(JSON.stringify({success: true, lists:lists},null,2));
			res.end();	
			
	}	
	});
});


//POST HTTP method to /userlist

router.post('/', (req,res,next) => {
	console.log(req.body);
	let newList = new userlist({
		firstname: req.body.firstname,
		lastname: req.body.lastname,
		SSID: req.body.SSID,
		email: req.body.email
	});
	userlist.addList(newList,(err, list) => {
		if(err) {
			res.json({success: false, message: `Failed to create a new list. Error: ${err}`});

		}
		else 
			res.json({success:true, message: "Added successfully."});
	
	});
});


//DELETE HTTP method to /userlist. Here, we pass in a params which is the object id.
router.delete('/:id', (req,res,next)=> {
	let id = req.params.id;
	console.log(id);
	userlist.deleteListById(id,(err,list) => {
		if(err) {
			res.json({success:false, message: `Failed to delete the list. Error: ${err}`});
		}
		else if(list) {
			res.json({success:true, message: "Deleted successfully"});
		}
		else
			res.json({success:false});
	})
});

module.exports = router;
