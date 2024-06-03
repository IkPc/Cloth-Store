import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1',
  headers: { 'Content-Type': 'application/json' }
});

const CLOTHES_CATEGORY_ID1 = 1;
const CLOTHES_CATEGORY_ID2 = 4;

export const getProducts = async () => {
  try {
    const response1 = await api.get(`/products/?categoryId=${CLOTHES_CATEGORY_ID1}`);
    const response2 = await api.get(`/products/?categoryId=${CLOTHES_CATEGORY_ID2}`);
    const products = response1.data.concat(response2.data);
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

getProducts().then(products => {
  console.log('Filtered products:', products);
}).catch(error => {
  console.error('Error:', error);
});
