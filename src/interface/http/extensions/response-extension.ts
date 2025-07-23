import express from "express";
import { ResponseParam } from "./express-response.extension";

export function extendResponse() {
    express.response.isOk = function (param: ResponseParam) {
        const res: Record<string, any> = { status: "success", message: param.message };
        if (param.data != null) res.data = param.data;
        if (param.error != null) res.error = param.error;
        return this.status(200).json(res);
    };
    express.response.isCreated = function (param: ResponseParam) {
        const res: Record<string, any> = { status: "success", message: param.message };
        if (param.data != null) res.data = param.data;
        if (param.error != null) res.error = param.error;
        return this.status(201).json(res);
    };
    express.response.isBadRequest = function (param: ResponseParam) {
        const res: Record<string, any> = { status: "error", message: param.message };
        if (param.data != null) res.data = param.data;
        if (param.error != null) res.error = param.error;
        return this.status(400).json(res);
    };
    express.response.isUnathorized = function (param: ResponseParam) {
        const res: Record<string, any> = { status: "error", message: param.message };
        if (param.data != null) res.data = param.data;
        if (param.error != null) res.error = param.error;
        return this.status(401).json(res);
    };
    express.response.isForbidden = function (param: ResponseParam) {
        const res: Record<string, any> = { status: "error", message: param.message };
        if (param.data != null) res.data = param.data;
        if (param.error != null) res.error = param.error;
        return this.status(403).json(res);
    };
    express.response.isNotFound = function (param: ResponseParam) {
        const res: Record<string, any> = { status: "error", message: param.message };
        if (param.data != null) res.data = param.data;
        if (param.error != null) res.error = param.error;
        return this.status(404).json(res);
    };
    express.response.isServerError = function (param: ResponseParam) {
        const res: Record<string, any> = { status: "error", message: param.message };
        if (param.data != null) res.data = param.data;
        if (param.error != null) res.error = param.error;
        return this.status(500).json(res);
    };
    express.response.isTooManyRequest = function (param: ResponseParam) {
        const res: Record<string, any> = { status: "error", message: param.message };
        if (param.data != null) res.data = param.data;
        if (param.error != null) res.error = param.error;
        return this.status(429).json(res);
    };
    express.response.isUnprocessableEntity = function (param: ResponseParam) {
        const res: Record<string, any> = { status: "error", message: param.message };
        if (param.data != null) res.data = param.data;
        if (param.error != null) res.error = param.error;
        return this.status(422).json(res);
    };
}