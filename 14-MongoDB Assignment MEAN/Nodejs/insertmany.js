var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = [
    { name: 'parveen', address: 'Delhi' , company : "Cognizant"},
    { name: 'admin', address: 'Mumbai', company : "Cog"},
    { name: 'mon', address: 'Pune', company : "Cognizant"},
    { name: 'node', address: 'Madurai', company : "Cognizant"},
    { name: 'blr', address: 'Coimbatore', company : "Cog"},
    { name: 'cret', address: 'Chennai', company : "Cognizant"},
    { name: 'honda', address: 'Kolkata', company : "Cognizant"}
  ];
  dbo.collection("customers").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});