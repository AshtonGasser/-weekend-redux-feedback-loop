const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// GET Route⬇
router.get("/", (req, res) => {
  console.log("GET /feedback");
  pool
    .query('SELECT * FROM "feedback";')
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error GET /feedback", error);
      res.sendStatus(500);
    });
});

//Post

router.post("/", (req, res) => {
  //sanitize , object model
  const { feeling, understanding, support, comments } = req.body;
  // ---reduce info here
  const queryText = `
INSERT INTO "feedback" (feeling, understanding, support, comments)
VALUES ($1, $2, $3, $4);
`;
  const values = [feeling, understanding, support, comments];
  pool
    .query(queryText, values)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(`oh no there is in ${err} in POST`);
      res.sendStatus(201);
    });
});

module.exports = router;
