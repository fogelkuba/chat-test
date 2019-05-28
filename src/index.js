const app = require('express')();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

app.get('/', (req, res, err) => {
    res.sendFile(__dirname + '/index.html')
});

io.on('connection', (socket) => {
    console.log('a user connected');
    // console.log(socket.id);
    
    socket.on('text_message', (msg) => {

        const message = {
            type: 'text',
            message: msg,
            date: new Date()
        }

        console.log('message: ', message);
        // const date = new Date();
        io.emit('chat message', message);
    });
});

server.listen(3000, () => {
    console.log('Listening on port *:3000')
});