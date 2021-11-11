import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Team } from "../entity/Team.entity";
import { User } from "../entity/User.entity";

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  findById(id: number) {
    return this.teamRepository.findOne(id, { relations: ["admin"] });
  }

  findByName(name: string) {
    return this.teamRepository.find({ where: { name } });
  }

  async create(
    teamObj: Omit<Team, "id" | "creationDate" | "admin" | "members" | "topics">,
    adminId: number
  ) {
    const user = await this.userRepository.findOne(adminId);
    const team = new Team();
    team.name = teamObj.name;
    team.admin = user;
    await this.teamRepository.save(team);
    user.teamsOwned = [...(user.teamsOwned ?? []), team];
    await this.userRepository.save(user);
  }
}
