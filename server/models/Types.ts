import { Request, Response } from "express";
import {Send} from 'express-serve-static-core';

export interface TypedRequestBody<T> extends Request {
    body: T,
};

export interface TypedResponse<ResBody> extends Response {
    json: Send<ResBody, this>;
 }