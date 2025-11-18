import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Produto from "./Produto.js";

@Entity()
class Saida {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("int")
  quantidade: number;

  @Column("timestamp")
  data_saida: Date;

  @ManyToOne(() => Produto, (produto) => produto.saidas, {
    onDelete: "CASCADE",
  })
  produto: Produto;
}

export default Saida;
