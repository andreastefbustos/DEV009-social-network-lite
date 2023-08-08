export const isUserLoggedIn = () => !!localStorage.getItem('user');

export const logout = () => {
  localStorage.removeItem('user');
};
