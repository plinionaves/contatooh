module.exports = function(app) {

  var controller = app.controllers.contato

  app.route('/contatos')
    .get(controller.listaContatos)
    .post(controller.salvaContato);

  app.route('/contatos/:id')
    .get(controller.obtemContato)
    .delete(controller.removeContato);

  /*app.get('/contatos', controller.listaContatos);
  app.post('/contatos', controller.salvaContato);
  app.get('/contatos/:id', controller.obtemContato);
  app.delete('/contatos/:id', controller.removeContato);*/

  /*app.use('/test', function(req, res, next) {
    console.log('middleware A');
    //next();
  });

  app.use('/test', function(req, res, next) {
    console.log('middleware B');
    next();
  });*/

};
