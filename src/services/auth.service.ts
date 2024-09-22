import api from './api.service';

export const login = async (
  username: string,
  password: string
): Promise<string> => {
  const response = await api.post<{ access_token: string }>('/auth/login', {
    username,
    password,
  });
  const token = response.data.access_token;
  if (typeof window !== 'undefined') {
    localStorage.setItem('access_token', token);
  }
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  return token;
};

export const logout = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('access_token');
    window.location.href = '/login';
  }
};

export const checkToken = async (token: string): Promise<void> => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  try {
    await api.get('/notes');
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      throw new Error('Invalid access_token');
    } else {
      throw error;
    }
  }
};
