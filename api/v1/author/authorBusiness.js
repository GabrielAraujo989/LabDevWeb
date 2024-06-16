const repository = require('./authorRepository')

const create = async (autor) => {
    return repository.save(autor);
};

const list = async () => {
    return repository.findAll();
};

const findById = async (id) => {
    return repository.findById(id);
};

const deleteById = async (id) => {
    return repository.deleteById(id);
};

module.exports = {
    create,
    list,
    findById,
    deleteById
}