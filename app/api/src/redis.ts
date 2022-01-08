import { RedisAdapterOptions } from "@socket.io/redis-adapter";
import { Emitter } from "@socket.io/redis-emitter";
import { createClient } from "redis";

const host = process.env['REDIS_HOST'] || 'redis';
const port = process.env['REDIS_PORT'] || 6379;

const publisher = createClient({
  url: `redis://${host}:${port}`,
  socket: {
    connectTimeout: 5000,
  },
});

const subscriber = publisher.duplicate();
const adapterOptions = {
  requestsTimeout: 5000,
  publishOnSpecificResponseChannel: true,
} as RedisAdapterOptions;

const emitter = new Emitter(publisher);

publisher.on('error', (err) => {
  console.error('Redis Client Error:', err);
});

export { publisher };
export { subscriber };
export { emitter };
export { adapterOptions };
