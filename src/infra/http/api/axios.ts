import axios from 'axios';

interface AxiosProps {
  baseUrl: string;
}

export const axiosRequest = ({ baseUrl }: AxiosProps) => {
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return instance;
};
