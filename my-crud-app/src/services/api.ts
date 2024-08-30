import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:3001'
});

export const getProducts = () => api.get('/products');
export const getProductById = (id: string) => api.get(`/products/${id}`);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createProduct = (product: any) => api.post('/products', product);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateProduct = (id: string, product: any) => api.put(`/products/${id}`, product);
export const deleteProduct = (id: string) => api.delete(`/products/${id}`);