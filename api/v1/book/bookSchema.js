const Joi = require("joi");

const createBooksSchema = {
    payload: Joi.object({
        title: Joi.string()                
                .required(),
        authorId: Joi.string().guid(),
        publishedDate: Joi.string()
                    .required(),
        isbn: Joi.string()
                .required(),
        summary: Joi.string()
                    .required(),        
    })
};

const getById = {
    params: Joi.object({
        id: Joi.string()
            .required()
    })
};

const getBooks = {
    query: Joi.object({
        title: Joi.string(),
        author: Joi.string()
    })
};

module.exports = {
    createBooksSchema, 
    getById,
    getBooks
};