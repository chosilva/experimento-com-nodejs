import { Controller, Get } from "@overnightjs/core";
import { Request, Response } from "express";
@Controller("status-server")
export class StatusServerController {
  @Get("")
  online(req: Request, res: Response) {
    return res.status(200).json({ ok: true, time: new Date() });
  }
}
