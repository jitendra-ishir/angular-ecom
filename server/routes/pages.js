const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Get pages
router.get('/', (req, res) => {
	db.query('SELECT * FROM contentpages', function (err, rows, fields) {
		if (err) {
			throw err;
		}
		//console.log(rows);
		res.json(rows);
	});
});

router.get('/:id', (req, res) => {
    var id = req.params.id;
    console.log(id);
	db.query('SELECT * FROM contentpages WHERE id = ?',[id], function (err, rows, fields) {
		if (err) {
			throw err;
		}
		//console.log(rows);
		res.json(rows[0]);
	});
});

module.exports = router;