import axios from 'axios';

// creates a custom config for axios to be used, enables modular and re-usable code
const API = axios.create({
  baseURL: 'http://localhost:8000/api',
  // baseURL: 'https://wendor-backend-sigma.vercel.app/api'
});

// to intercept any network errors that might pop up while requesting the API
API.interceptors.request.use(request => {
  console.log('Starting Request', request)
  return request
})

// to intercept any network errors that might pop up while getting response from the API
API.interceptors.response.use(response => {
  console.log('Response:', response)
  return response
}, error => {
  console.error('Error Response:', error)
  return Promise.reject(error)
});

export const fetchInventory = async () => API.get('/shopper/inventory');

export const buyItems = async (items) => {
  for (const item of items) {
    await API.post(`/shopper/inventory/${item._id}/buy`, { quantity: item.quantity });
  }
};