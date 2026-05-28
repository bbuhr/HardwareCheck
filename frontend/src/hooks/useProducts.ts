import { useMemo, useState } from 'react';

import { searchProducts } from '@/services/product.service';
import { filterProducts } from '@/utils/productFilters';

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [activeTab, setActiveTab] = useState('ALL');
  const [activeSubTab, setActiveSubTab] = useState('GERAL');

  async function handleSearch(query: string) {
    try {
      setLoading(true);
      setError(null);

      const result = await searchProducts(query);

      setProducts(result);
      setSelectedId(result[0]?.id || null);
    } catch {
      setError('Erro ao consultar produtos');
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }

  const filteredProducts = useMemo(() => {
    return filterProducts({
      products,
      activeTab,
      activeSubTab
    });
  }, [products, activeTab, activeSubTab]);

  const selectedProduct = useMemo(() => {
    return (
      filteredProducts.find(item => item.id === selectedId) ||
      filteredProducts[0] ||
      null
    );
  }, [filteredProducts, selectedId]);

  return {
    filteredProducts,
    selectedProduct,
    loading,
    error,
    activeTab,
    activeSubTab,
    selectedId,
    setSelectedId,
    setActiveTab,
    setActiveSubTab,
    handleSearch
  };
}