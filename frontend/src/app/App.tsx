import { useState } from 'react';
import.meta.env.VITE_API_URL

function App() {
  const [products, setProducts] = useState<any[]>([]);
  const [query, setQuery] = useState('');

  async function handleSearch() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/search?q=${query}`
      );

      const data = await response.json();

      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-black mb-8">
          HardwareCheck
        </h1>

        <div className="flex gap-4 mb-8">
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Digite um produto"
            className="flex-1 border border-slate-300 rounded-xl px-4 py-3"
          />

          <button
            onClick={handleSearch}
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold"
          >
            Buscar
          </button>
        </div>

        <div className="space-y-4">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200"
            >
              <h3 className="text-xl font-bold">
                {product.name}
              </h3>

              <p className="text-slate-500">
                {product.store}
              </p>

              <strong className="text-2xl">
                R$ {product.price}
              </strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;