const bookModel = require('./bookModel');
const {Op} = require('sequelize');
const authorModel = require('../author/authorModel');

const syncModel = async () => {
    await bookModel.sync({ force: false });
};

const save = async (book) => {
    await syncModel();
    return bookModel.create(book);
};

const findAll = async (filter) => {
    const {title, author} = filter;

    return bookModel.findAll({
        include: [{
            model: authorModel,
            required: true,
            as: 'author',
            attributes: ['id', 'name'],
            where: (author) ? {name: {[Op.iLike]: `${author}%`}} : {}    
        }],
        where: (title) ? {title: {[Op.iLike]: `${title}%`}} : {},
    });
};

const findById = async (id) => {
    return bookModel.findOne({
        include: [ {
            model: authorModel,
            required: false
        }],
        where: {
            id: id
        }
    })
};

module.exports = {
    save,
    findAll,
    findById
};