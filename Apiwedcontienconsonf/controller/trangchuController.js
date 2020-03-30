const laydulieu= require('../data/data');
module.exports.trangchu = function(req,res,next){
 var contien;
 var conson;
    laydulieu('SELECT * FROM public.contien')
      .then(function(data){
        contien = data;
      })
      .then(function(){
        return laydulieu('SELECT * FROM public.conson');
      })
      .then(function(data1){
        conson = data1;
      })
      .then(function(){
          var pagecontien = parseInt(req.query.pagecontien ) || 1 ;
          var pageconson = parseInt(req.query.pageconson ) || 1 ;

          var perPage = 3 ;

          var startcontien = (pagecontien -1 ) * perPage;
          var startconson = (pageconson -1 ) * perPage;

          var endcontien = pagecontien * perPage;
          var endconson = pageconson * perPage;

         res.render('content/content',{
            contiens:contien.slice(startcontien,endcontien),
            consons:conson.slice(startconson,endconson)
          });
      })
      .catch(function(err){
        console.log(err);
      });
      
}