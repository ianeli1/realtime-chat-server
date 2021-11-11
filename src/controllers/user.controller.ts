import { Controller, Get, HttpException, Post, Query } from "@nestjs/common";
import { ApiQuery } from "@nestjs/swagger";
import { UserService } from "../services/user.service";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/id")
  @ApiQuery({ name: "id", type: Number })
  findById(@Query("id") id?: number) {
    if (!id || !Number.isSafeInteger(+id)) {
      throw new HttpException("Id missing!", 400);
    }
    return this.userService.findById(id);
  }

  @Get("/name")
  @ApiQuery({ name: "name", type: String })
  findByName(@Query("name") name: string) {
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
