var express = require('express');
var app = express();
var path = require('path');

var Dbmanager = require('./modules/dbmanager.js')

var dbmanager = new Dbmanager();

var bodyParser = require('body-parser')


app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

app.use(express.static(path.join(__dirname, 'frontend/dist')));
app.get(['/'], function(req, res) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,token,Origin,X-Origin');
    console.log()
    res.sendFile('index.html', { root: __dirname + '/frontend/dist' });
});

var routes = ['assets', 'form', 'login', '']
routes.forEach(function(route) {
    app.use('/' + route, express.static('public/dist'));
})




app.post('/save/:objectType', function(req, res) {
    dbmanager.saveObject(req.params.objectType, req.body, function(err, data) {
        if (err) {
            res.status(500);
            res.json({ success: false });
        } else {
            res.json({ success: true, data: data });
        }
    });
});


app.post('/getData/:objectType', function(req, res) {
    dbmanager.getdata(req.params.objectType, req.body, function(err, data) {
        if (err) {
            res.status(500);
        } else {
            res.json({ success: true, data: data });
        }
    })
})



app.listen(9000, 'localhost', function() {
    console.log("server deployed on http://%s:%s", this.address().address, this.address().port);
});