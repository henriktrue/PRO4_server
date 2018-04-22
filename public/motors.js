// Make connection
var socket = io.connect('https://pro4team2.herokuapp.com');

// Query DOM
var message = document.getElementById('message'),
      btn1_l = document.getElementById('send1_l'),
      btn1_r = document.getElementById('send1_r'),
      btn2_l = document.getElementById('send2_l'),
      btn2_r = document.getElementById('send2_r'),
      btn3_l = document.getElementById('send3_l'),
      btn3_r = document.getElementById('send3_r'),
      btn4_l = document.getElementById('send4_l'),
      btn4_r = document.getElementById('send4_r'),
      btn5_l = document.getElementById('send5_l'),
      btn5_r = document.getElementById('send5_r'),
      output = document.getElementById('output');

// Emit events on motor1
btn1_l.addEventListener('click', function(){
  socket.emit('m1_l', {
  });
});

// Emit events on motor1
btn1_r.addEventListener('click', function(){
  socket.emit('m1_r', {
  });
});

// Emit events on motor2
btn2_l.addEventListener('click', function(){
  socket.emit('m2_l', {
  });
});

// Emit events on motor2
btn2_r.addEventListener('click', function(){
  socket.emit('m2_r', {
  });
});

// Emit events on motor3
btn3_l.addEventListener('click', function(){
  socket.emit('m3_l', {
  });
});

// Emit events on motor3
btn3_r.addEventListener('click', function(){
  socket.emit('m3_r', {
  });
});

// Emit events on motor4
btn4_l.addEventListener('click', function(){
  socket.emit('m4_l', {
  });
});

// Emit events on motor4
btn4_r.addEventListener('click', function(){
  socket.emit('m4_r', {
  });
});

// Emit events on motor5
btn5_l.addEventListener('click', function(){
  socket.emit('m5_l', {
  });
});

// Emit events on motor5
btn5_r.addEventListener('click', function(){
  socket.emit('m5_r', {
  });
});
