//console.log('a');

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/react-project/build'))

app.get('/', (req, res) => {
  res.sendFile(index.html)
})

app.listen(300, '0.0.0.0', () => console.log("server is running : port 3000"))