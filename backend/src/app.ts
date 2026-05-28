import Fastify from 'fastify';
import cors from '@fastify/cors';

import productRoutes from './routes/product.routes';

const app = Fastify({
  logger: true
});

await app.register(cors, {
  origin: true
});

app.get('/', async () => {
  return {
    status: 'ok',
    service: 'hardwarecheck-backend'
  };
});

app.register(productRoutes);

export default app;