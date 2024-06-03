import { getTokenFromCookie } from "./setToken"

export const headers = {
    headers: {
        "Content-type": "application/json",
        "authorization": "Bearer " + getTokenFromCookie()
    },
}

export const multipartheaders = {
    headers: {
        "Content-type": "multipart/form-data",
        "authorization": "Bearer " + getTokenFromCookie()
    },
}