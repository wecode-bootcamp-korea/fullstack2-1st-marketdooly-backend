import prisma from '../../prisma';

const getAllUsers = async () => {
  return await prisma.$queryRaw`
  SELECT
    *
  FROM
    users
  `;
};

const searchUserEmail = async email => {
  return await prisma.$queryRaw`
  SELECT
    u.email
  FROM
    users u
  WHERE
    u.email = ${email}
  `;
};

const searchUserId = async accountName => {
  return await prisma.$queryRaw`
  SELECT
    u.account
  FROM
    users u
  WHERE
    u.account = ${accountName}
  `;
};

const searchUserPw = async accountName => {
  return await prisma.$queryRaw`
  SELECT
    u.password
  FROM
    users u
  WHERE
    u.account = ${accountName}
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

const findAccount = async (email, name) => {
  return await prisma.$queryRaw`
  SELECT
    u.account
  FROM
    users u
  WHERE
    u.email = ${email}
  AND
    u.name =${name}
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
    u.id,
    u.account,
    u.name,
    u.email
  FROM
    users u
  WHERE
    u.account = ${accountName}
  `;
};

export default {
  getAllUsers,
  searchUserEmail,
  searchUserId,
  searchUserPw,
  createUser,
  findAccount,
  resetPassword,
  getBasicUserInfo,
};
