// services/authService.ts
import axios from 'axios';

export interface UserForLoginDto {
  username: string;
  password: string;
}

export async function login(user: UserForLoginDto) {
  return axios.post('/api/login', user);
}

export async function getCredits(username: string) {
  return axios.get(`/api/credits/${username}`);
}