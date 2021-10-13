import prisma from '../../prisma';

const getAllUsers = async () => {
  return await prisma.$queryRaw`
  SELECT
  *
  FROM
  users
  `;
};

const searchUserId = async accountName => {
  return await prisma.$queryRaw`
  SELECT
  users.account
  FROM
  users
  WHERE
  users.account = ${accountName}
  `;
};

const searchUserPw = async accountName => {
  return await prisma.$queryRaw`
  SELECT
  users.password
  FROM
  users
  WHERE
  users.account = ${accountName}
  `;
};

const createUser = async userData => {
  const {
    account,
    name,
    email,
    hash,
    phone_number,
    address,
    gender,
    birthday,
    mandatory_policy_agreed,
    personal_information_policy_agreed,
    marketing_policy_agreed,
  } = userData;
  return await prisma.$queryRaw`
  INSERT INTO
  users (
    account,
    name,
    email,
    password,
    phone_number,
    address,
    gender,
    birthday,
    mandatory_policy_agreed,
    personal_information_policy_agreed,
    marketing_policy_agreed
  )
  VALUES
  (
    ${account},
    ${name},
    ${email},
    ${hash},
    ${phone_number},
    ${address},
    ${gender},
    ${birthday},
    ${mandatory_policy_agreed},
    ${personal_information_policy_agreed},
    ${marketing_policy_agreed}
  )
  `;
};

const findUser = async (email, name) => {
  return await prisma.$queryRaw`
  SELECT
  users.account
  FROM
  users
  WHERE
  users.email = ${email}
  AND
  users.name =${name}
  `;
};

const resetPassword = async (account, password) => {
  return await prisma.$queryRaw`
  UPDATE
  users
  SET
  password = ${password}
  WHERE
  account = ${account}
  `;
};

const getBasicUserInfo = async accountName => {
  return await prisma.$queryRaw`
  SELECT
  users.account,
  users.name,
  users.email
  FROM
  users
  WHERE
  users.account = ${accountName}
  `;
};

export default {
  getAllUsers,
  searchUserId,
  searchUserPw,
  createUser,
  findUser,
  resetPassword,
  getBasicUserInfo,
};
