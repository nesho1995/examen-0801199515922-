var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/0801199515922', function(req,res,next){
  var examen = [
                {"nombre":"Nestor Josue Hernandez Osorto"},
                {"cuenta":0801199515922},
                  {"correo":"nhernandezosorto@gmail.com"},
              ];
  res.json(examen);
});
router.get('/suma', function(req,res,next){
  res.render('suma',{"txtNum1":"","txtNum2":"","sum":""});
});


var suma= [];
router.post('/suma',function(req,res,next){
  console.log(req.body);
      var nume1=req.body.txtNum1;
      var nume2=req.body.txtNum2;
      suma.push(parseInt(nume1)+parseInt(nume2))
      var resultado=suma;
      var sumar={"sum":resultado}
      res.render('suma',sumar);
});

module.exports = router;
