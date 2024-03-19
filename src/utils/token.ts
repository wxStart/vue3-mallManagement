export const setToken = (token: string) => {
  sessionStorage.setItem('token', token);
};

export const getToken = (): string | null => {
  return sessionStorage.getItem('token');
};

export const clearToken = () => {
  return sessionStorage.removeItem('token');
};
