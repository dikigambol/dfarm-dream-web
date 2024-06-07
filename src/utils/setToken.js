import { jwtDecode } from "jwt-decode";

export function setTokenInCookie(token) {
  const decoded = jwtDecode(token);
  const exp = decoded.exp;
  const expiryDate = new Date(exp * 1000);
  document.cookie = `token=${token}; expires=${expiryDate.toUTCString()}; path=/`;
  console.log("Token decoded:", decoded);
  console.log("Expiration time set in cookies:", exp);
}

export function getTokenCookie() {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        // Memeriksa jika cookie dimulai dengan 'token='
        if (cookie.startsWith('token=')) {
            // Mengembalikan nilai token setelah '='
            return cookie.substring('token='.length, cookie.length);
        }
    }
    return null; // Jika tidak ada cookie 'token'
}


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


export function deleteAllCookies() {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [name, _] = cookie.trim().split("=");
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}

export function decodeToken() {
  var decoded = jwtDecode(getTokenFromCookie());
  return decoded;
}
