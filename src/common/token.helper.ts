// TODO: Migrate to something like react-cookie
export function isLoggedIn(): boolean {
  return document.cookie ? true : false
}

export function setToken(accessToken: string, refreshToken: string) {
  document.cookie = `Bearer=${accessToken};refresh=${refreshToken}`
}

export function setTokenValue(value: string) {
  document.cookie = `${value}`
}

export function getToken(): string | null {
  return document.cookie ? document.cookie : null;
}

export function logout() {
  document.cookie = ""
}
