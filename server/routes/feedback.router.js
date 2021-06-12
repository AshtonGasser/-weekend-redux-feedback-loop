const express = require('express')
const router = express.Router()
const pool = require('../modules/pool');

// GET Route⬇
router.get('/', (req, res) => {
    console.log('GET /feedback');
    pool.query('SELECT * FROM "feedback";')
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /feedback', error);
        res.sendStatus(500);  
    });
})



//Post 

router.post('/',(req,res) => {
    //sanitize , object model
 Test = 'test'
    // ---reduce info here
pool.query(Test, ['test'])
.then(result => {
    res.sendStatus(201);
}).catch(err => {
    console.log(`oh no there is in ${err} in POST`);
    res.sendStatus(201)
})

})

module.exports = router;