import { Response } from "express";
import * as v from "valibot";

export function valibotError(e: unknown, res: Response) {
  if (v.isValiError(e)) {
    res
      .status(400)
      .json({
        message: e.message,
      })
      .end();
  }
}
