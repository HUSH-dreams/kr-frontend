export const selectUser = state => state.user.currentUser;
export const selectRegisterError = state => state.user.registerError;
export const selectLoginError = state => state.user.loginError;
export const selectLogoutError = state => state.user.logoutError;
export const selectToken = state => state.user.token;