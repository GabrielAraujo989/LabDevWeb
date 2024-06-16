require('dotenv').config();
const Hapi = require("@hapi/hapi");
const routes = require('./routes');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const {version} = require('./package.json');

const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST
});

const swaggerPlugin = [
    Inert,
    Vision,
    {
        plugin: HapiSwagger,
        options: {
            documentationPath: '/api/documentation',
            schemes: ['http', 'https'],
            info: {
                title: 'API de Cadastro de Livros e Autores',
                version: version
            }
        }
    }
]


const plugins = [
    {
        plugin: routes,
        options: {
            routesBaseDir: './api'
        }
    }
];


plugins.push(...swaggerPlugin);

module.exports = {server, plugins};