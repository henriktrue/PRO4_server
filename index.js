var express = require('express');
var socket = require('socket.io');

//App setup
var app = require('express')();
var http = require('http').Server(app);
var server = app.listen(4000, function(){
  console.log('listening to requests on port 4000');
});

// Her henter vi
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

// Static files
app.use(express.static('public'));

//socket setup
var io = socket(server);

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
