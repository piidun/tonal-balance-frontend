// services/authService.ts
import axios from 'axios';

export interface UserForLoginDto {
  username: string;
  password: string;
}

export async function login(user: UserForLoginDto) {
  return axios.post('/api/login', user);
}