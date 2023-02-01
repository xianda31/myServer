const express = require("express");
const router = express.Router();


router.route("*").all((req, res, next) => {
  console.log(timeIs(), req.method);
  next();
});

require('./members/member_routes').set_member_routes(router) ;
require('./excel/excel_routes').set_excel_routes(router) ;

function timeIs() {
  const date_ob = new Date();
  const hours = date_ob.getHours();
  const minutes = date_ob.getMinutes();
  const seconds = ("0" + date_ob.getSeconds()).slice(-2);
  const tag =  hours +  ":" +  minutes +  ":" +   seconds  ;
  return (tag);
      
} 

module.exports = router;