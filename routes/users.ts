var express = require('express');
var router = express.Router();
import { createNewUser } from "../src/crudUser";

/* GET users listing. */
router.get('/', function(req: any, res: any, next: any) {
  createNewUser();
  res.send('respond with a resource');
});

module.exports = router;
