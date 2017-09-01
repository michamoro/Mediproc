var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const data = {
    title: 'Sección 2',
    header: 'Datos Generales',
    description: "<p>ALCANCE: LA EVALUACIÓN SE APLICA A TODO EL PERSONAL QUE HAYA CUMPLIDO DOS MESES EN LA EMPRESA.</p>" +
                 "<p>Leer con atención cada uno de los item. Encontrará algunas preguntas de selección múltiple y otras de respuestas abiertas, debe responderlas todas para que el programa le permita continuar.</p>",
    styles: ['/stylesheets/style.s2.css']
  }
  res.render('epcpo/s2', data);
});

module.exports = router;
