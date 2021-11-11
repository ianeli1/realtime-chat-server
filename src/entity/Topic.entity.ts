import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Message } from "./Message.entity";
import { Team } from "./Team.entity";

@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  creationDate: Date;

  @Column()
  name: string;

  @UpdateDateColumn()
  lastUpdate: Date;

  @OneToMany(() => Message, (message) => message.topic)
  messages: Message[];

  @ManyToOne(() => Team, (team) => team.topics)
  team: Team;
}
