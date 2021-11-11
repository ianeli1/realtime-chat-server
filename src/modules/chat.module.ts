import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MessageController } from "../controllers/message.controller";
import { TeamsController } from "../controllers/team.controller";
import { TopicController } from "../controllers/topic.controller";
import { UserController } from "../controllers/user.controller";
import { Message } from "../entity/Message.entity";
import { Team } from "../entity/Team.entity";
import { Topic } from "../entity/Topic.entity";
import { User } from "../entity/User.entity";
import { MessageService } from "../services/message.service";
import { TeamService } from "../services/team.service";
import { TopicService } from "../services/topic.service";
import { UserService } from "../services/user.service";

@Module({
  imports: [TypeOrmModule.forFeature([User, Team, Topic, Message])],
  providers: [UserService, TeamService, TopicService, MessageService],
  controllers: [
    UserController,
    TeamsController,
    TopicController,
    MessageController,
  ],
})
export class ChatModule {}
