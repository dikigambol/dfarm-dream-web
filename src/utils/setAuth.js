// authService.js

import jwtDecode from 'jwt-decode';

// Fungsi untuk mengirim token ke server untuk menyetel cookie
export async function setTokenInCookie(token) {
  try {
    const response = await fetch('/set-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token })
    });

    if (response.ok) {
      const decoded = jwtDecode(token);
      console.log("Token decoded:", decoded);
      console.log("Expiration time set in cookies:", decoded.exp);
    } else {
      console.error('Failed to set token in cookie.');
    }
  } catch (error) {
    console.error('Error setting token in cookie:', error);
  }
}

// Fungsi untuk mengambil token dari cookie
export function getTokenFromCookie() {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split("=");
    if (name === "token") {
      return value;
    }
  }
  return null;
}

// Fungsi untuk mendekode token
export function decodeToken() {
  const token = getTokenFromCookie();
  if (token) {
    const decoded = jwtDecode(token);
    return decoded;
  } else {
    console.error('Token tidak ditemukan di cookie.');
    return null;
  }
}
