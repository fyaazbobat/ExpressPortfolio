let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const business = require('../models/business');

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

			res.render('business/list', {title: 'Business Contact', BusinessList: businessList});
		}
	});
})

/* GET Route for display add page - CREATE operation */
router.get('/add', (req, res, next) => {
	res.render('business/add', {title: 'Add Contact'});

});
/* POST Route for processing add page - CREATE operation */
router.post('/add', (req, res, next) => {
	let newBusiness = Business({
		"name":req.body.name,
		"phoneNumber": req.body.phoneNumber,
		"email": req.body.email
	});

	Business.create(newBusiness, (err, Book) => {
		if(err)
		{
			console.log(err);
			res.end(err);
		}
		else
		{
			res.redirect('/business-contact');
		}
	})
});
/* GET Route for display edit page - UPDATE operation */
router.get('/edit/:id', (req, res, next) => {
	let id = req.params.id;

	Business.findById(id, (err, businessToEdit) => {
		if(err)
		{
			console.log(err);
			res.end(err);
		}
		else
		{
			res.render('business/edit', {title: 'Edit Business Contact', business: businessToEdit})
		}
	})
});
/* POST Route for processing edit page - UPDATE operation */
router.post('/edit/:id', (req, res, next) => {
	let id = req.params.id

	let updatedBusiness = Business({
		"_id":id,
		"name":req.body.name,
		"phoneNumber": req.body.phoneNumber,
		"email": req.body.email
	});
	Business.updateOne({_id: id}, updatedBusiness, (err) => {
		if(err)
		{
			console.log(err)
			res.end(err);
		}
		else
		{
			res.redirect('/business-contact');

		}
	});
});

/* GET to perfor deletion - delete operation */
router.get('/delete:id', (req, res, next) => {
	let id = req.params.id;

	Business.remove({_id: id}, (err) => {
		if(err)
		{
			console.log(err)
			res.end(err);
		}
		else
		{
			res.redirect('/business-contact');

		}
	})
});

module.exports = router;