import { useState } from 'react';

import { EmptyState } from '@/components/EmptyState';
import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { ProductDetails } from '@/components/ProductDetails';
import { SearchModal } from '@/components/SearchModal';
import { Tabs } from '@/components/Tabs';

import { useProducts } from '@/hooks/useProducts';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
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
  } = useProducts();

  return (
    <div>
      <Header />

      <button onClick={() => setIsModalOpen(true)}>
        Nova Consulta
      </button>

      <Tabs
        activeTab={activeTab}
        activeSubTab={activeSubTab}
        onTabChange={setActiveTab}
        onSubTabChange={setActiveSubTab}
      />

      {filteredProducts.length === 0 && (
        <EmptyState />
      )}

      {filteredProducts.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          selected={selectedId === product.id}
          onSelect={() => setSelectedId(product.id)}
        />
      ))}

      {selectedProduct && (
        <ProductDetails product={selectedProduct} />
      )}

      <SearchModal
        open={isModalOpen}
        loading={loading}
        error={error}
        onClose={() => setIsModalOpen(false)}
        onSearch={handleSearch}
      />
    </div>
  );
}