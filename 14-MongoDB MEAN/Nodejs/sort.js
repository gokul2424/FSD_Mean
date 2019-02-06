var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//{ name: 1 } // ascending
//{ name: -1 } // descending


MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var mysort = { name: 1 };
  dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });

  var mysort = { name: -1 };
  dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });

}); 