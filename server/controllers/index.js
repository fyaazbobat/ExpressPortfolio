let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
	res.render('index', {title: 'Home'});
}

module.exports.displayAboutPage = (req, res, next) => {
	res.render('index', {title: 'About'});
}

module.exports.diplayProjectsPage = (req, res, next) => {
	res.render('index', {title: 'Projects'});
}

module.exports.displayServicesPage = (req, res, next) => {
	res.render('index', {title: 'Services'});
}

module.exports.displayContatctPage = (req, res, next) => {
	res.render('index', {title: 'Contact'});
}