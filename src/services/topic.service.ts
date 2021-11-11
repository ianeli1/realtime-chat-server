import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Team } from "../entity/Team.entity";
import { Topic } from "../entity/Topic.entity";

@Injectable()
export class TopicService {
  constructor(
    @InjectRepository(Topic) private topicRepository: Repository<Topic>,
    @InjectRepository(Team) private teamRepository: Repository<Team>
  ) {}

  findById(id: number) {
    return this.topicRepository.findOne(id, { relations: ["team"] });
  }

  findByName(name: string) {
    return this.topicRepository.find({ where: { name } });
  }

  async create(
    topicObj: Omit<
      Topic,
      "id" | "creationDate" | "lastUpdate" | "messages" | "team"
    >,
    teamId: number
  ) {
    const team = await this.teamRepository.findOne(teamId);
    const topic = new Topic();
    topic.name = topicObj.name;
    topic.team = team;
    await this.topicRepository.save(topic);
    team.topics = [...(team.topics ?? []), topic];
    await this.teamRepository.save(team);
  }
}
