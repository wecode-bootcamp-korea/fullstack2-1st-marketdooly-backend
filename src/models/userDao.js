import prisma from '../../prisma';

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
  users.password
  FROM
  users
  WHERE
  users.email = ${email}
  AND
  users.name =${name}
  `;
};

export default { searchUserId, searchUserPw, createUser, findUser };
