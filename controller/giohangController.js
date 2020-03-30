const db = require('../lowdb');

module.exports.giohang = function(req,res,next){
    var sessionId = req.signedCookies.sessionId;
    if(!sessionId)
    {
         res.redirect('/');
         return;
    }
    const hangs = db.get('session').find({ id : sessionId}).get('sanpham').write();
    res.render('giohang/giohang',{
       hangs: hangs
    });
};

module.exports.deletesp = function(req,res,next){
    var productten = req.params.productten;
    var sessionId = req.signedCookies.sessionId;

  if(! sessionId)
  {
  	res.redirect('/');
  	return;
  }
  
  db.get('session').find({ id : sessionId}).get('sanpham').remove({ten:productten}).write();

  res.redirect('/giohang');
   
};