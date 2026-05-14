const BASE_URL = import.meta.env.VITE_API_URL;

export async function http<T>(url: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${url}`);

  if (!response.ok) {
    throw new Error('Erro na comunicação com servidor');
  }

  return response.json();
}