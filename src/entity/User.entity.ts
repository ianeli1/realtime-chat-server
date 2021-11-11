import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Team } from "./Team.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  creationDate: Date;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column("date")
  dob: Date;

  @OneToMany(() => Team, (team) => team.admin)
  teamsOwned: Team[];

  @ManyToMany(() => Team)
  @JoinTable()
  teams: Team[];
}
