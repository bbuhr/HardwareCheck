import type {
  FastifyReply,
  FastifyRequest
} from 'fastify';

export async function errorMiddleware(
  error: Error,
  request: FastifyRequest,
  reply: FastifyReply
) {
  console.error(error);

  return reply.status(500).send({
    error: 'Internal Server Error'
  });
}