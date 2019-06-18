var Dbmanager = function() {}


var databaseUrl = "mongodb://sujan:sujan@ds113445.mlab.com:13445/filesdb";


var mongojs = require('mongojs');
var collections = ['filescount'];

var db = mongojs(databaseUrl, collections);
var dbmanager = new Dbmanager();


Dbmanager.prototype.saveObject = function(objType, objValue, cb) {
    objValue.createdOn = new Date();
    db[objType].save(objValue, function(err, saved) {
        if (err || !saved) {
            cb(err);
        } else {
            cb(undefined, saved);
        }
    });
}
Dbmanager.prototype.getdata = function(objType, objValue, cb) {
    db[objType].find(objValue.query, function(err, data) {
        if (err) {
            cb(err);
        } else {
            cb(undefined, data);
        }
    })
}







module.exports = Dbmanager;