import { Body, Controller, Get, Injectable, Post } from "@nestjs/common";
import { TopicService } from "../services/topic.service";

@Controller("topics")
export class TopicController {
  constructor(private readonly topicService: TopicService) {}

  @Get("/id")
  findById(id: number) {
    return this.topicService.findById(id);
  }

  @Get("/name")
  findByName(@Body("name") name: string) {
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
