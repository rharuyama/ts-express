var express = require('express');
var router = express.Router();
import { createNewUser, readUser } from "../src/crudUser";

/* GET users listing. */
router.get('/', function(req: any, res: any, next: any) {
  //res.render('users');
  createNewUser();
  (async ()=>{
    res.json(await readUser());
  })();
});

module.exports = router;
