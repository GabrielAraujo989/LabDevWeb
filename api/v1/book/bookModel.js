const Sequelize = require('sequelize');
const database = require('../../../server/banco');
const Author = require('../author/authorModel');

const Book = database.sequelize.define('Book', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
        field: 'id'
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'title'
    },
    authorId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        field: 'authorId',
        references: {
            model: 'tbAuthor',
            key: 'id'
        }
    },
    publishedDate: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'publishedDate'
    },
    isbn: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'isbn'
    },
    summary: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'summary'
    },    
}, {
    timestamps: false,
    tableName: 'tbBook'
});

Book.belongsTo(Author, {foreignKey: 'authorId', as: 'author' });
Author.hasMany(Book, { foreignKey: 'authorId', as: 'books' });

module.exports = Book;