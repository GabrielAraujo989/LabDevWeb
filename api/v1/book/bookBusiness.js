const repository = require('./bookRepository')

const create = async (book) => {
    return repository.save(book);
};

const list = async (filter) => {
    return repository.findAll(filter);
};

const findById = async (id) => {
    return repository.findById(id);
};

module.exports = {
    create,
    list,
    findById
}