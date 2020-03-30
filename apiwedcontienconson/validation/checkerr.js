module.exports.checkerr = function(req,res,next) {
  var err = [];
  if(!req.body.ten)
  { 
      err.push('không được để trống, vui lòng nhập tên.');
  }
  if(!req.body.sdt)
  {
  	  err.push('không được để trống, vui lòng nhập sđt.');
  }
  if(!req.body.email)
  {
  	  err.push('không được để trống, vui lòng nhập email.');
  }
  if(!req.body.tieude)
  {
  	  err.push('không được để trống, vui lòng nhập tiêu đề.');
  }
  if(!req.body.noidung)
  {
  	  err.push('không được để trống, vui lòng nhập nội dung.');
  }
  if(err.length)
  {
  	 res.render('lienhe/lienhe',{
  	 	errs : err,
  	 	value : req.body
  	 });
  	return 0; 
  }

  // res.locals.text= 4;
  next();
}