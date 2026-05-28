import { Product } from '@/types/product';
import { formatCurrency } from '@/utils/currency';

interface Props {
  product: Product;
  selected: boolean;
  onSelect: () => void;
}

export function ProductCard({
  product,
  selected,
  onSelect
}: Props) {
  return (
    <div onClick={onSelect}>
      <span>{product.store}</span>

      <h4>{product.name}</h4>

      <strong>
        {formatCurrency(product.price)}
      </strong>
    </div>
  );
}