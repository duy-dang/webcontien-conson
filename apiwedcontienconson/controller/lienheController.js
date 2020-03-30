
module.exports.lienhe = function(req,res,next) {
    res.render('lienhe/lienhe');
  };

module.exports.postlienhe = function(req,res,next) {
  var ten = req.body.ten ;
  var email = req.body.email ;
  var sdt = req.body.sdt ; 
  var tieude = req.body.tieude ;
  var noidung = req.body.noidung ;
  
  res.redirect('/lienhe');
}
  