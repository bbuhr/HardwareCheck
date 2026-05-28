import type {
  FastifyReply,
  FastifyRequest
} from 'fastify';

import { searchProducts } from '../services/product.service';

export async function searchProductsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const query = (request.query as any).q;

    if (!query) {
      return reply.status(400).send({
        error: 'Query não informada'
      });
    }

    const products = await searchProducts(query);

    return reply.send(products);
  } catch (error) {
    return reply.status(500).send({
      error: 'Erro ao buscar produtos'
    });
  }
}