import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Message } from "../entity/Message.entity";
import { Topic } from "../entity/Topic.entity";
import { User } from "../entity/User.entity";

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message) private messageRepository: Repository<Message>,
    @InjectRepository(Topic) private topicRepository: Repository<Topic>,
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  findById(id: number, full?: boolean) {
    return this.messageRepository.findOne(id, {
      relations: full ? ["author", "topic"] : undefined,
    });
  }

  findByTopic(topicId: number) {
    return this.messageRepository.find({ where: { topic: { id: topicId } } });
  }

  async create(
    msgObj: Omit<
      Message,
      "id" | "creationDate" | "lastUpdate" | "author" | "topic"
    >,
    authorId: number,
    topicId: number
  ) {
    const topic = await this.topicRepository.findOne(topicId);
    const user = await this.userRepository.findOne(authorId, {
      cache: { milliseconds: 500, id: authorId },
    });
    const message = new Message();
    message.content = msgObj.content;
    message.author = user;
    message.topic = topic;
    return await this.messageRepository.save(message);
  }
}
