import server from './server';
import io from './socket';
import { publisher, subscriber, adapterOptions } from './redis';
import { createAdapter } from '@socket.io/redis-adapter';

io.attach(server);

const host = 'localhost';
const port = process.env.PORT || 80;

Promise.all([publisher.connect(), subscriber.connect()]).then(() => {

  io.adapter(createAdapter(publisher, subscriber, adapterOptions));

  server.listen(port, () => {
    console.log(`Socket.IO server running at http://${host}:${port}/`);
  });  
});

process.on('SIGINT', () => {
  server.close(() => {
      process.exit();
  });
});
