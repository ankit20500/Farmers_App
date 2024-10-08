// app.js
import express from "express"
const app=express();
import errorMiddleware from "./middleWares/ErrorFn.js"

app.use(express.json());

// Write your all the routers in this format
// import userRouter from "../Routers/userRouter"
// and use this :-  app.use("api/farmer-app/userRouter")



app.use(errorMiddleware);
export default app;