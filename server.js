var express = require("express"),
    path = require('path'),
    port = 8000,
    app = express();
    
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(port, function() {
    console.log('Listening on port ' + port);
});