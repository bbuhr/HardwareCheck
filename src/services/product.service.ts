import { http } from './api';
import { Product } from '@/types/product';

export async function searchProducts(query: string): Promise<Product[]> {
  const data = await http<Product[]>(
    `/search?q=${encodeURIComponent(query)}`
  );

  return data.map((item, index) => ({
    ...item,
    id: item.id || `prod-${index}-${Date.now()}`,
    category: item.category || 'ALL'
  }));
}