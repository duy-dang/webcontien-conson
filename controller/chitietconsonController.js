const laydulieu= require('../data/data');
module.exports.chitietconson = function(req,res,next){
    var id = req.params.id;
    var consons;
    var conson;
   laydulieu('SELECT * FROM public.conson')
      .then(function(data){
         consons = data;
      })
      .then(function(){
        consons.forEach((value,key) => {
          if(value.id == id)
          {
            conson = value;
          }
        });
      })
      .then(function(){
          res.render('chitietcontent/chitietconson',{
              conson: conson,
              consons:consons          
            });
      })
      .catch(function(err){
        console.log(err);
      });
};