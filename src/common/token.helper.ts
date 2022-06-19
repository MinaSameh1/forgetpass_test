// TODO: Migrate to something like react-cookie
export function isLoggedIn(): boolean {
  return document.cookie ? true : false
}

export function setToken(value: string) {
  document.cookie = value
}

export function getToken(): string | null {
  return document.cookie ? document.cookie : null;
}
