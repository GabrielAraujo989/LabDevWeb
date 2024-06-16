const klawSync = require('klaw-sync');
const path = require('path');

const plugins = {
    name: 'routes',
    version: '1.0.0',
    register: async (server, options) => {
        const routes = [];
        klawSync(options.routesBaseDir, { nodir: true }).filter((file) => {
            return file.path.indexOf('Routes.js') > -1;
        }).forEach((_file) => {
            const routePath = path.relative(__dirname, _file.path);
            const routeObject = {
                plugin: require(`./${routePath}`),
                options: {
                    config: options.config
                }
            };
            routes.push(routeObject);
        });
        
        await server.register(routes);

        server.route({
            method: 'GET',
            path: '/',
            handler: (request, h) => {
                return { message: 'API de Cadastro de Livros e Autores' };
            }
        });
    }
};

module.exports = plugins;
