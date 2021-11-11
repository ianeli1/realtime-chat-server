import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Topic } from "./Topic.entity";
import { User } from "./User.entity";

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  creationDate: Date;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.teamsOwned)
  /** */
  admin: User;

  @ManyToMany(() => User)
  members: User[];

  @OneToMany(() => Topic, (topic) => topic.team)
  topics: Topic[];
}
