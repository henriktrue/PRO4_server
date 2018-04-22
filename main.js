// koden der kører på webserveren
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http, { origins: '*:*',  pingInterval: 5000, pingTimeout: 2500,});

//Listening port 4000 fra web serverens perspektiv
var listening_port = process.env.PORT || 4000; 

// Her hentes der
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/robot', function(req, res){
  res.sendFile(__dirname + '/robot.html');
});

// Static files
app.use(express.static('public'));

io.on('connection', function(socket){
  console.log('connection established', socket.id)

  //listen for events on motor 1 buttons
  socket.on('m1_l', function(data){
    io.sockets.emit('m1_l', data);
  });

  socket.on('m1_r', function(data){
    io.sockets.emit('m1_r', data);
  });

  //listen for events on motor 2 buttons
  socket.on('m2_l', function(data){
    io.sockets.emit('m2_l', data);
  });

  socket.on('m2_r', function(data){
    io.sockets.emit('m2_r', data);
  });

  //listen for events on motor 3 buttons
  socket.on('m3_l', function(data){
    io.sockets.emit('m3_l', data);
  });

  socket.on('m3_r', function(data){
    io.sockets.emit('m3_r', data);
  });

  //listen for events on motor 4 buttons
  socket.on('m4_l', function(data){
    io.sockets.emit('m4_l', data);
  });

  socket.on('m4_r', function(data){
    io.sockets.emit('m4_r', data);
  });

  //listen for events on motor 5 buttons
  socket.on('m5_l', function(data){
    io.sockets.emit('m5_l', data);
  });

  socket.on('m5_r', function(data){
    io.sockets.emit('m5_r', data);
  });
});

http.listen(listening_port, '0.0.0.0', function(){
    console.log('listening on', listening_port);
});
