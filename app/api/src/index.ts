import server from './server';
import io from './socket';

io.attach(server);

const port = process.env.PORT || 80;
server.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});

process.on('SIGINT', () => {
  server.close(() => {
      process.exit();
  });
});
