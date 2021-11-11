import { Body, Controller, Get, HttpException, Post } from "@nestjs/common";
import { UserService } from "../services/user.service";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/id")
  findById(@Body("id") id?: number) {
    if (!id || !Number.isSafeInteger(id)) {
      throw new HttpException("Id missing!", 400);
    }
    return this.userService.findById(id);
  }

  @Get("/name")
  findByName(@Body("name") name: string) {
    if (!name) {
      throw new HttpException("Name missing!", 400);
    }

    return this.userService.findByName(name);
  }

  @Post("/createDebug")
  async createDebug() {
    return this.userService.create({
      firstName: "Mr",
      lastName: "Debug2",
      dob: new Date(),
    });
  }
}
