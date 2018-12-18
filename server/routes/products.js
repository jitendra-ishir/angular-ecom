const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Get categories
router.get('/', (req, res) => {
	db.query('SELECT * FROM products', function (err, rows, fields) {
		if (err) {
			throw err;
		}
		//console.log(rows);
		res.json(rows);
	});
});

//Product Details
router.get('/:id', (req, res) => {
	var id = req.params.id;
	db.query('SELECT * FROM products WHERE product_id = ?',[id], function (err, data, fields) {
		if (err) {
			throw err;
		}
		//console.log(rows);
		res.json(data[0]);
	});
});

//Search Products
router.get('/search/:keyword', (req, res) => {
	var keyword = req.params.keyword;
	db.query('SELECT * FROM products WHERE product_name = ?',[keyword], function (err, rows, fields) {
		if (err) {
			throw err;
		}
		// console.log(rows);
		res.json(rows);
	});
});

module.exports = router;