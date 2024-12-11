import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Notas',
      version: '1.0.0',
      description: 'Documentación de la API de Notas',
    },
    servers: [
      {
        url: 'http://localhost:3001',
        description: 'Servidor local',
      },
    ],
  },
  apis: [ './doc/*.yaml'], 
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec; 