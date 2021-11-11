import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ApiQuery } from "@nestjs/swagger";
import { IMessage } from "../models/IMessage";
import { MessageService } from "../services/message.service";

@Controller("messages")
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get("/id")
  @ApiQuery({ name: "id", type: Number })
  findById(@Query("id") id: number) {
    return this.messageService.findById(id, true);
  }

  @Get("/topic")
  @ApiQuery({ name: "id", type: Number })
  findByTopic(@Query("id") @Body("id") topicId: number) {
    return this.messageService.findByTopic(topicId);
  }

  @Post("/create")
  create(
    @Body("content") content: IMessage,
    @Body("authorId") authorId: number,
    @Body("topicId") topicId: number
  ) {
    return this.messageService.create(
      {
        content,
      },
      authorId,
      topicId
    );
  }
}
