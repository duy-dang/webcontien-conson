const db = require('../lowdb');
const shortid = require('shortid');

module.exports = function(req,res, next) {
	
	if(! req.signedCookies.sessionId)
	{
		var sessionId = shortid.generate();
		res.cookie('sessionId', sessionId,{
			signed: true
		});

		db.get('session').push({
			id: sessionId,
			sanpham:[]
		}).write();
	}
	var sessionId = req.signedCookies.sessionId;
	res.locals.countcart = db.get("session").find({ id: sessionId }).get("sanpham").size().value();
	next();
}