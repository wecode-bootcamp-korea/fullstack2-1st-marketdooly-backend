export default () => {
  const length = 12;
  const charset =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let newPassword = '';
  for (let i = 0, n = charset.length; i < length; ++i) {
    newPassword += charset.charAt(Math.floor(Math.random() * n));
  }
  return newPassword;
};
