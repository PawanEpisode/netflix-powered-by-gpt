export const EMAIL_REGEX = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
export const PASSWORD_REGEX =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
export const FULLNAME_REGEX = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{10,}$/;

export const checkValidData = (email, password, fullname) => {
  const isEmailValid = EMAIL_REGEX.test(email);
  const isPasswordValid = PASSWORD_REGEX.test(password);
  const isFullNameValid = !fullname.length ? true: FULLNAME_REGEX.test(fullname);

  return {
    isFullNameValid: isFullNameValid ? null: "Full name is not valid",
    isEmailValid: isEmailValid ? null: "Email is not valid",
    isPasswordValid: isPasswordValid ? null: "Password is not valid",
  }
};
