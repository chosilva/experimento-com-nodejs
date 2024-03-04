import { Controller, Get, Post } from "@overnightjs/core";
import { Request, Response } from "express";

@Controller("send-data")
export class SendDataController {
  @Post("")
  async receberDado(req: Request, res: Response) {
    console.log(req.body);

    return res.status(200).json(req.body);
  }
  @Get("")
  async mostraDado(req: Request, res: Response) {
    return res.status(200).json({ ok: new Date() });
  }
}
