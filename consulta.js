var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

// ObjectID de algum contato
var _idProcurado = new ObjectID('56c4f0f47b7b51b954bd7b0c');

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh', function(err, db) {

  if(err) throw err;

  db.collection('contatos').findOne({_id: _idProcurado}, function(err, contato) {
    if(err) throw err;
    console.log(contato);
  });

});
