const { getBooks, create, findById} = require('./bookController');
const schema = require('./bookSchema');

const plugin = {
    name: 'bookRoute',
    version: '1',
    register: (server) => {
        server.route([
            {
                method: "GET",
                path: "/books",
                options: {
                    tags: ['Books'],
                    description: 'List of books',
                    handler: getBooks,
                    validate: schema.getBooks
                }
            },
            {
                method: "GET",
                path: "/books/{id}",
                options: {
                    tags: ['Books'],
                    description: 'Create a book',
                    handler: findById,
                    validate: schema.getById
                }
            },
            {
                method: "POST",
                path: "/books",
                options: {
                    tags: ['Books'],
                    handler: create,
                    validate: schema.createBooksSchema
                }
            }            
        ])
    }
};

module.exports = plugin;