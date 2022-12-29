module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      'orders',
      [
        {
          id: 1,
          orderNfId: '1605181324132',
          orderNumber: '18153',
          orderPath: null,
          orderFileName: null,
          orderOriginalName: null,
          emissionDate: '2020-10-30T11:00:00-03:00',
          pdfFile: null,
          emitedTo: '22843980000127',
          nNf: '18153',
          CTE: '',
          value: '198450',
          createdAt: '2020-10-30 17:54:18',
          updatedAt: '2020-10-30 17:54:18',
          cnpjId: 1,
          userId: 1,
          buyerId: 1,
          providerId: 1,
          orderStatusBuyer: '0',
          orderStatusProvider: '0',
          deliveryReceipt: null,
          cargoPackingList: null,
          deliveryCtrc: null,
        },
      ],
    );
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('orders', null, {});
  },
};
