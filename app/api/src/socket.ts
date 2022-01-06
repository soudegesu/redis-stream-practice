import { Server } from 'socket.io';

const io = new Server({cors: {
  origin: '*',
  methods: ["GET", "POST", "OPTION"],
}});

io.connectTimeout(15000);

io.on('connection', (socket) => {
  console.log('connection');

  const roomId = 'room';

  socket.join(roomId);

  socket.on('disconnect', () => {
    console.log('disconnect');
  });

  socket.on('sendMessage', msg => {
    console.log(`sendMessage: ${JSON.stringify(msg)}`);
    io.to(roomId).emit('recieveMessage', msg);
  });
  
});

export default io;
