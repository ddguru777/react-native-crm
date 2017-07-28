module.exports = {

  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('item_tags', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },

        tag_id: {
          type: Sequelize.INTEGER,
          unique: 'item_tag_taggable'
        },

        taggable: {
          type: Sequelize.ENUM('groups', 'persons'),
          unique: 'item_tag_taggable'
        },

        taggable_id: {
          type: Sequelize.INTEGER,
          unique: 'item_tag_taggable',
          references: null
        },

        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
        user_id: Sequelize.INTEGER,
      })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('item_tag')
  },

}
