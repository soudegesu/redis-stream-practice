import { Server } from 'socket.io';
import { emitter } from './redis';

const io = new Server({cors: {
  origin: '*',
  methods: ["GET", "POST", "OPTION"],
}});

io.connectTimeout(15000);

io.on('connection', async (socket) => {
  console.log('connection');

  const roomId = 'room';
  await socket.join(roomId);

  socket.on('disconnect', () => {
    console.log('disconnect');
  });

  socket.on('sendMessage', msg => {
    console.log(`sendMessage: ${JSON.stringify(msg)}`);
    emitter.to(roomId).emit('recieveMessage', msg);
  });

});

export default io;
