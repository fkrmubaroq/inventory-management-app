import responseErrorMiddleware from "@/middleware/response-error-middleware";
import cors from "cors";
import express from "express";
import routes from "./routes";

const web = express();

web.use(cors());
web.use(express.json());
web.use(routes);
web.use(responseErrorMiddleware);

export default web;
