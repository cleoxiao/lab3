
/*
 * GET home page.
 */

exports.view = function(req, res){
  var nameTOSHOW = req.params.UserName;
  if(nameTOSHOW === undefined){
    nameTOSHOW = 'Yanxin';
  }
  console.log("Name is "+nameTOSHOW);
  res.render('index', {
  	'name': nameTOSHOW,
  });
};
