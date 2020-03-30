const laydulieu= require('../data/data');
module.exports.chitietcontien = function(req,res,next){
    var id = req.params.id;
    var contiens;
    var contien;
    laydulieu('SELECT * FROM public.contien')
      .then(function(data){
        contiens = data;
      })
      .then(function(){
        contiens.forEach((value,key) => {
          if(value.id == id)
          {
           contien = value;
          }
        });
      })
      .then(function(){
         res.render('chitietcontent/chitietcontien',{
              contien:contien,
              contiens:contiens             
            });
      })
      .catch(function(err){
        console.log(err);
      });
};