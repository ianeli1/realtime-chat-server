import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ApiQuery } from "@nestjs/swagger";
import { TopicService } from "../services/topic.service";

@Controller("topics")
export class TopicController {
  constructor(private readonly topicService: TopicService) {}

  @Get("/id")
  @ApiQuery({ name: "id", type: Number })
  findById(@Query("id") id: number) {
    return this.topicService.findById(id);
  }

  @Get("/name")
  @ApiQuery({ name: "name", type: String })
  findByName(@Query("name") name: string) {
    return this.topicService.findByName(name);
  }

  @Post("/create")
  create(@Body("name") name: string, @Body("teamId") teamId: number) {
    this.topicService.create(
      {
        name,
      },
      teamId
    );
  }
}
