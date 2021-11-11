import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TeamsController } from "../controllers/team.controller";
import { UserController } from "../controllers/user.controller";
import { Message } from "../entity/Message.entity";
import { Team } from "../entity/Team.entity";
import { Topic } from "../entity/Topic.entity";
import { User } from "../entity/User.entity";
import { TeamService } from "../services/team.service";
import { UserService } from "../services/user.service";

@Module({
  imports: [TypeOrmModule.forFeature([User, Team, Topic, Message])],
  providers: [UserService, TeamService],
  controllers: [UserController, TeamsController],
})
export class ChatModule {}
