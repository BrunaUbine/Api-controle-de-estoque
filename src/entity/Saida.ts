import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Produto } from "./Produto.js";

@Entity()
export class Saida {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  quantidade: number;

  @Column("timestamp")
  data_saida: Date;

  @ManyToOne(() => Produto, (produto) => produto.saida, {
    onDelete: "CASCADE",
  })
  produto: Produto;
}


