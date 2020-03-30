const db = require('../lowdb');
module.exports.addsp = function(req,res,next){
    var productten = req.params.productten;
    var sessionId = req.signedCookies.sessionId;

  const hang = db.get('session').find({id: sessionId}).get('sanpham').find( {ten : productten}).get('ten').value();

  if(! sessionId)
  {
  	res.redirect('/');
  	return;
  }

  if(hang != productten )
  {
    db.get('session').find({id: sessionId}).get('sanpham').push({
          ten : productten
        }).write();
  }
  
  var count = db
     .get('session')
     .find({id: sessionId})
     .get('sanpham')
     .find({ten: productten})
     .get('soluong',0)
     .value();


  db.get('session').find({ id : sessionId}).get('sanpham').find({ten:productten}).set('soluong', count+1).write();
  
  res.redirect('/');
   
};