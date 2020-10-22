let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to contact
let Business = require('../models/business');

router.get('/', (req, res, next) =>{
	Business.find((err, businessList) =>{
		if(err)
		{
			return console.error(err);
		}
		else
		{
			//console.log(BusinessList);

			res.render('business', {title: 'Business List', BusinessList: businessList})
		}
	});
})
module.exports = router;