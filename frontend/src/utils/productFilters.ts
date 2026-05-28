import { Product } from '@/types/product';

interface FilterParams {
  products: Product[];
  activeTab: string;
  activeSubTab: string;
}

export function filterProducts({
  products,
  activeTab,
  activeSubTab
}: FilterParams) {
  let result = [...products];

  if (activeTab !== 'ALL') {
    result = result.filter(
      product => product.category === activeTab
    );
  }

  if (activeSubTab === 'MELHOR PREÇO') {
    result.sort((a, b) => a.price - b.price);
  }

  return result;
}