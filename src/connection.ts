import { Logger } from "./logger";
import { createConnection, Connection as TypeOrmConnection } from "typeorm";

type Mutable<T> = {
  -readonly [k in keyof T]: T[k];
};

export class Connection {
  static readonly connection: TypeOrmConnection;

  static async connect() {
    try {
      //@ts-ignore
      this.connection = await createConnection();
    } catch (e) {
      Logger.error("[Connection]", e);
    }
  }
}
