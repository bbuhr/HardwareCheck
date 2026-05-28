import { searchKabum } from '../scrapers/kabum.scraper';
import { searchPichau } from '../scrapers/pichau.scraper';
import { searchTerabyte } from '../scrapers/terabyte.scraper';

export async function searchProducts(query: string) {
  const results = await Promise.allSettled([
    searchKabum(query),
    searchPichau(query),
    searchTerabyte(query)
  ]);

  return results
    .filter(result => result.status === 'fulfilled')
    .flatMap((result: any) => result.value);
}