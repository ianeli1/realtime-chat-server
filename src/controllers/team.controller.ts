import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ApiQuery } from "@nestjs/swagger";
import { TeamService } from "../services/team.service";

@Controller("teams")
export class TeamsController {
  constructor(private readonly teamService: TeamService) {}

  @Get("/id")
  @ApiQuery({ name: "id", type: Number })
  findById(@Query("id") id: number) {
    return this.teamService.findById(id);
  }

  @Get("/name")
  @ApiQuery({ name: "name", type: Number })
  findByName(@Query("name") name: string) {
    return this.teamService.findByName(name);
  }

  @Post("/create")
  create(@Body("name") name: string, @Body("adminId") adminId: number) {
    return this.teamService.create(
      {
        name,
      },
      adminId
    );
  }
}
