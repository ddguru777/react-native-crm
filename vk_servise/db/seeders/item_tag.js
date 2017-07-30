module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('item_tags', [
      {
        taggable: 'users',
        tag_id: 1,
        taggable_id: 1,
        user_id: 1,
      },
    ], {})
  },

  down: function (queryInterface, Sequelize) {

  }

}
