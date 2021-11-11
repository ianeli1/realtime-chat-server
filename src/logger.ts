export class Logger {
  static error(...args: any[]) {
    console.log("An error has ocurred", ...args);
  }
}
