const Sequelize = require('sequelize');
const database = require('../../../server/banco');

const Author = database.sequelize.define('Author', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        field: 'id' //nome do atributo do banco
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'name'
    },
    biography: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'biography'
    },
    birthDate: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'birthDate'
    }
}, {
    timestamps: false,
    tableName: 'tbAuthor' //nome da tabela banco
});

module.exports = Author;