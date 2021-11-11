import { Body, Controller, Get, Post } from "@nestjs/common";
import { IMessage } from "../models/IMessage";
import { MessageService } from "../services/message.service";

@Controller("messages")
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Get("/id")
  findById(@Body("id") id: number) {
    return this.messageService.findById(id, true);
  }

  @Get("/topic")
  findByTopic(@Body("id") topicId: number) {
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
