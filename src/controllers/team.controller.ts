import { Body, Controller, Get, Post } from "@nestjs/common";
import { TeamService } from "../services/team.service";

@Controller("teams")
export class TeamsController {
  constructor(private readonly teamService: TeamService) {}

  @Get("/id")
  findById(@Body("id") id: number) {
    return this.teamService.findById(id);
  }

  @Get("/name")
  findByName(@Body("name") name: string) {
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
