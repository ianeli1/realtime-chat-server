import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { IMessage } from "../models/IMessage";
import { Topic } from "./Topic.entity";
import { User } from "./User.entity";

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  creationDate: Date;

  @UpdateDateColumn()
  lastUpdate: Date;

  @Column("jsonb")
  content: IMessage;

  @ManyToOne(() => User)
  author: User;

  @ManyToOne(() => Topic, (topic) => topic.messages)
  topic: Topic;
}
