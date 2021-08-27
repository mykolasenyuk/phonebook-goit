// const getIsLoggedIn = state => state.auth.isLoggedIn;

// const getUsername = state => state.auth.user.name;

// const authSelectors = {
//   getIsLoggedIn,
//   getUsername,
// };
// export default authSelectors;
export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUserName = state => state.auth.user.name;

export const getUserEmail = state => state.auth.user.email;

export const getToken = state => state.auth.token;
