import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL ? `${process.env.REACT_APP_API_BASE_URL}/api` : 'http://localhost:8000/api'

export const Axios = axios.create({
  baseURL: baseURL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': localStorage.getItem('ltk') || ''
  }
});