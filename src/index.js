const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res, err) => {
    // res.send('<h1> Hello World! </h1>')
    res.sendFile(__dirname + '/index.html')
});

io.on('connection', () => {
    console.log('a user connected');
});

http.listen(3000, () => {
    console.log('Listening on port *:3000')
});