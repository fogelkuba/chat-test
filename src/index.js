const app = require('express')();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

app.get('/', (req, res, err) => {
    res.sendFile(__dirname + '/index.html')
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('text_message', (msg) => {
        console.log('message: ', msg);
        const date = new Date();
        io.emit('chat message', msg + date);
    });
});

server.listen(3000, () => {
    console.log('Listening on port *:3000')
});