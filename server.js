var express = require('express');

var app = express();

app.use(function(req, res, next) {
    if(req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {        
        next();
    }
});

app.use(express.static('public'));

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('Server running on http://localhost:' + port);
})