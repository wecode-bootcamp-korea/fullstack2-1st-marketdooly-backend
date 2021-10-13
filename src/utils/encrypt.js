import bcrypt from 'bcrypt';

const encryptPassword = async password => {
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

const decryptPassword = async (inputPassword, hash) => {
  const validPass = await bcrypt.compare(inputPassword, hash);
  return validPass;
};

export default { encryptPassword, decryptPassword };
