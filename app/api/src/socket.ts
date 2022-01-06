import { Server } from 'socket.io';

const io = new Server({cors: {
  origin: '*',
  methods: ["GET", "POST", "OPTION"]
}});

io.on('connection', (socket) => {
  console.log('connection');

  socket.on('disconnect', () => {
    console.log('disconnect');
  });

  socket.on('chat message', msg => {
    io.emit('chat message', msg);
  });
  
});

export default io;
