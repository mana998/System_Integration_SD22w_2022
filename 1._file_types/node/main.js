import express from 'express';

const app = express();
app.use(express.json());

import swaggerJsdoc from 'swagger-jsdoc';
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Users API',
      version: '0.0.1',
    },
  },
  apis: ['./routers/*.js'],
};
const openapiSpecification = swaggerJsdoc(options);

import swaggerUI from "swagger-ui-express";
app.use('/docs', swaggerUI.serve, swaggerUI.setup(openapiSpecification));

import parseRouter from "./routers/parseRouter.js";
app.use(parseRouter);

app.listen(3000, (error) => {
    console.log("Server is running on", 3000);
})