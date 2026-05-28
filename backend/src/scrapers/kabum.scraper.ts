import axios from 'axios';
import * as cheerio from 'cheerio';
import crypto from 'node:crypto';

export async function searchKabum(query: string) {
  try {
    console.log('Searching Kabum:', query);

    const url = `https://www.kabum.com.br/busca/${encodeURIComponent(query)}`;

    const response = await axios.get(url);

    console.log('Status:', response.status);

    const $ = cheerio.load(response.data);

    const products: any[] = [];

    console.log('HTML loaded');

    $('.productCard').each((_, element) => {
      const name = $(element)
        .find('.nameCard')
        .text()
        .trim();

      const price = $(element)
        .find('.priceCard')
        .text()
        .trim();

      const link = $(element)
        .find('a')
        .attr('href');

      products.push({
        id: crypto.randomUUID(),
        name,
        price,
        link,
        store: 'Kabum',
        category: 'ALL'
      });
    });

    console.log('Products found:', products.length);

    return products;
  } catch (error) {
    console.error(error);

    return [];
  }
}