const authorModel = require('./authorModel');
const bookModel = require('../book/bookModel')

const syncModel = async () => {
    await authorModel.sync({ force: false });
};

const save = async (author) => {
    await syncModel();
    return authorModel.create(author);
};

const findAll = async () => {
    return authorModel.findAll({
        include: [{
            model: bookModel,
            as: 'books',
            attributes: ['id', 'title']
        }],
        attributes: ['id', 'name', 'biography', 'birthDate']
    });
};

const findById = async (id) => {
    return authorModel.findOne({
        where: {
            id: id
        }
    })
};

const deleteById = async (id) => {
    return authorModel.destroy({
        where: {
            id: id
        }
    });
};

module.exports = {
    save,
    findAll,
    findById,
    deleteById
};