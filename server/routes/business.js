let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const business = require('../models/business');

//connect to contact
let Business = require('../models/business');

let businessController = require('../controllers/business')

router.get('/', businessController.displayBusinessList);
/* GET Route for display add page - CREATE operation */

router.get('/add', businessController.displayAddPage);

/* POST Route for processing add page - CREATE operation */
router.post('/add', businessController.processAddPage)
/* GET Route for display edit page - UPDATE operation */
router.get('/edit/:id', businessController.displayEditPage)
/* POST Route for processing edit page - UPDATE operation */


router.post('/edit/:id', businessController.processEditPage)

/* GET to perfor deletion - delete operation */
router.get('/delete:id', businessController.performDelete)
module.exports = router;