import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entity/User.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  findById(id: number) {
    return this.userRepository.findOne(id, { relations: ["teamsOwned"] });
  }

  findByName(name: string) {
    return this.userRepository.find({ where: { firstName: name } });
  }

  create(userObj: Omit<User, "id" | "creationDate" | "teamsOwned" | "teams">) {
    const user = new User();
    for (const name of Object.getOwnPropertyNames(userObj)) {
      user[name] = userObj[name];
    }
    return this.userRepository.save(user);
  }
}
