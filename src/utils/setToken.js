export function setTokenInCookie(token) {
    const expiresIn = 12 * 60 * 60 * 1000;
    const expiryDate = new Date(Date.now() + expiresIn);
    document.cookie = `__fvc2yu=${token}; expires=${expiryDate.toUTCString()}; path=/`;
}

export function getTokenFromCookie() {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === '__fvc2yu') {
            return value;
        }
    }
    return null;
}

export function deleteAllCookies() {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [name, _] = cookie.trim().split('=');
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
}