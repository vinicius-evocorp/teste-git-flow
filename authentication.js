export default (token = "", password = "") => {
  return !!token.length && !!password.length;
};
