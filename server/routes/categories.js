const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Get categories
router.get('/', (req, res) => {
	db.query('SELECT category_id, category_name FROM categories', function (err, rows, fields) {
		if (err) {
			throw err;
		}
		//console.log(rows);
		res.json(rows);
	});
});

router.get('/:id', (req, res) => {
	var id = req.params.id;
	db.query('SELECT * FROM products WHERE category = ?',[id], function (err, rows, fields) {
		if (err) {
			throw err;
		}
		//console.log(rows);
		res.json(rows);
	});
});

module.exports = router;