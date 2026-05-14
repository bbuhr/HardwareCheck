import { useState } from 'react';

interface Props {
  open: boolean;
  loading: boolean;
  error: string | null;
  onClose: () => void;
  onSearch: (query: string) => void;
}

export function SearchModal({
  open,
  loading,
  error,
  onClose,
  onSearch
}: Props) {
  const [query, setQuery] = useState('');

  if (!open) {
    return null;
  }

  return (
    <div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <button onClick={() => onSearch(query)}>
        Buscar
      </button>

      <button onClick={onClose}>
        Fechar
      </button>

      {loading && <p>Carregando...</p>}

      {error && <p>{error}</p>}
    </div>
  );
}