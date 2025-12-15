function validate(username, password) {
  const u = username.trim(),
    p = password.trim();
  if (u.length > 12) {
    throw ERRORS.usernameTooLong(u);
  }
  if (u.length < 1) {
    throw ERRORS.usernameTooShort(u);
  }
  if (u.match(/[^\w]/)) {
    throw ERRORS.usernameInvalidCharacters(u);
  }
  if (p.length > 24) {
    throw ERRORS.passwordTooLong(p);
  }
  if (p.length < 8) {
    throw ERRORS.passwordTooShort(p);
  }
  if (p.match(/[^\w\d;:?.,<>~*^%$ @!_]/)) {
    throw ERRORS.passwordInvalidCharacters(p);
  }
  if (!p.match(/[A-Z]/)) {
    throw ERRORS.passwordNoCapital(p);
  }
  if (!p.match(/[\d]/)) {
    throw ERRORS.passwordNoNumber(p);
  }
  if (p.includes(u)) {
    throw ERRORS.passwordContainsUsername(p);
  }
  return true;
}
