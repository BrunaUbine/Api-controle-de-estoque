import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text", { unique: true })
  username: string;  

  @Column("text")
  password: string;  
}
