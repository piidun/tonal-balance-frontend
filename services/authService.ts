// services/authService.ts
import axios from 'axios';
import jwtDecode from 'jwt-decode';

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

function decodeJwt(token: string): any {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );
  
  return JSON.parse(jsonPayload);
}

export function getUsernameFromToken(token: string): string | null {
  try {
    const decoded = decodeJwt(token);
    return decoded.unique_name || null;
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
}