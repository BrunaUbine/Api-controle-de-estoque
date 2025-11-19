import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { hash } from "bcryptjs";

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  username: string;

  @Column("text")
  password: string;

  constructor(username?: string, password?: string) {
    if (username) this.username = username;
    if (password) this.password = password;
  }

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }
}


