import { Product } from '@/types/product';
import { formatCurrency } from '@/utils/currency';

interface Props {
  product: Product;
}

export function ProductDetails({ product }: Props) {
  return (
    <div>
      <h2>{product.name}</h2>

      <strong>
        {formatCurrency(product.price)}
      </strong>

      <a
        href={product.link}
        target="_blank"
        rel="noreferrer"
      >
        Abrir Link
      </a>
    </div>
  );
}