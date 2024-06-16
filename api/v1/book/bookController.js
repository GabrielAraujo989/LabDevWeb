const business = require('./bookBusiness');

const getBooks = async (request, h) => {    
    const filter = {
        title: request.query.title || '',
        author: request.query.author || ''
    };

    const result = await business.list(filter);
    return h.response(result).code(200);
};

const create = async (request, h) => {
    const {payload} = request;

    try {
        const result = await business.create(payload);
        return h.response(result).code(201);
    } catch(error) {
        console.log(error);
    }
};

const findById = async (request, h) => {    
    const bookId = request.params.id;

    return h.response(await business.findById(bookId));
};

module.exports = {
    getBooks,
    create,
    findById
};