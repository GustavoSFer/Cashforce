module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          name: 'ALLAN SOUZA',
          email: 'allan@cashforce.com.br',
          phoneNumber: null,
          mobile: null,
          departament: null,
          verificationCode: '',
          emailChecked: 1,
          createdAt: '2020-10-01 21:31:37',
          updatedAt: '2020-10-01 22:41:23',
          cashforceAdm: 1,
        },
      ],
    );
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};