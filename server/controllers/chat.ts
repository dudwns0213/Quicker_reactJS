import { NextFunction, Request, Response } from "express";
import { findRecentMessage } from "../../room";

export class ChatController {
  async getRecentMessage (req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query;
      const recentMessage = await findRecentMessage(query)
      res.send(recentMessage);
    } catch (error) {
      console.error(error);
      next(error)
    }
  }
}