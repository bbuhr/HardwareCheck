import type { FastifyInstance } from 'fastify';

import { searchProductsController } from '../controllers/product.controller';

export default async function productRoutes(
  app: FastifyInstance
) {
  app.get('/search', searchProductsController);
}