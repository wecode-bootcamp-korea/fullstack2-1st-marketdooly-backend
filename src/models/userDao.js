import prisma from '../../prisma';

const searchUser = async accountName => {
  return await prisma.$queryRaw`
  SELECT
  users.account
  FROM
  users
  WHERE
  users.account
  = ${accountName}
  `;
};

const createUser = async userData => {
  const {
    account,
    name,
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

export default { searchUser, createUser };
