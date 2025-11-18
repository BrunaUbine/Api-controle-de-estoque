import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { hash } from "bcryptjs";

@Entity()
class Usuario {
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
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }
}

export default Usuario;
