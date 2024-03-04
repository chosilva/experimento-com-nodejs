import { Server } from "@overnightjs/core";
import express from "express";
import cors from "cors";

import { SendDataController } from "./controllers/SendDataController";
import { StatusServerController } from "./controllers/StatusServerController";

export class LayerServer extends Server {
  constructor(protected portApp: number) {
    super();
    this.setupMiddlewares();
    this.setupControllers();
  }

  setupControllers() {
    this.addControllers([
      new SendDataController(),
      new StatusServerController(),
    ]);
  }

  setupMiddlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  init() {
    this.app.listen(this.portApp, () => {
      console.log(`Server is Running in port ${this.portApp}`);
    });
  }

  getApp() {
    return this.app;
  }
}
