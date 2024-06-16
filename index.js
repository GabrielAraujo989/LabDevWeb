require('dotenv').config();
const { server, plugins } = require('./server');
const { sequelize } = require('./server/banco');

(async () => {
    try {
        // Verificar se o sequelize está conectado ao banco de dados
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');

        await server.register(plugins);

        await server.start();
        console.log("Server listening: " + server.info.uri);
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        console.log("Erro ao iniciar o servidor:", error);
    }
})();
