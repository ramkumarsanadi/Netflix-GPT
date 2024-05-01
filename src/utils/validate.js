export const checkValidData = (email, password) => {
  const IsEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const IsPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!IsEmailValid) return "Email is not valid";
  if (!IsPasswordValid) return "Password is not valid";

  return null;
};
