const business = require('./authorBusiness');

const getAuthors = async (request, h) => {
    const result = await business.list();
    return h.response(result).code(200);
};

const create = async (request, h) => {
    
    try {
        const result = await business.create(request.payload);
        return h.response(result).code(201);
    } catch(error) {
        console.error(error);
        return h.response({ error: 'Internal Server Error' }).code(500);
    }
};

const findById = async (request, h) => {    
    const authorId = request.params.id;
    const result = await business.findById(authorId);
    if (result) {
        return h.response(result).code(200);
    } else {
        return h.response({ error: 'Não foi encontrado Autor com este nome' }).code(404);
    }
};

const deleteById = async (request, h) => {
    const authorId = request.params.id;
   
    try {
        const result = await business.findById(authorId);        
        if (result) {
            try {
                await business.deleteById(authorId);
                return h.response('Autor removido com sucesso').code(204);
            } catch (error) {
                if (error.name === "SequelizeForeignKeyConstraintError") {
                    return h.response({error: "Não é possível deletar um autor que está referenciado em outra tabela!"}).code(400);
                } else {
                    return h.response({ error: 'Internal Server Error' }).code(500);
                }
            }
        } else {
            return h.response({ error: 'Autor não encontrado' }).code(404);
        }
    } catch (error) {
        return h.response({ error: 'Internal Server Error' }).code(500);
    }
};

module.exports = {
    getAuthors,
    create,
    findById,
    deleteById
};