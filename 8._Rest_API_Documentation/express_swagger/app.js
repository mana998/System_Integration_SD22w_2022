import express from "express"
const app = express();

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

import userRouter from "./routers/users.js";
import movieRouter from "./routers/movies.js";
app.use(userRouter);
app.use(movieRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, (error) => {
    if (error) console.log(error)
    else console.log("Server is running on", PORT);
});