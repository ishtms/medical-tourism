var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    success: true,
    data: [
        {
            name: 'Hospital 1',
            owner: 'Delhi Government'
        }
    ]
  })
});

module.exports = router;
