import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Produto } from "./Produto.js";

@Entity()
export class Entrada {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  quantidade: number;

  @Column({ type: "timestamp" })
  data_entrada: Date;

  @ManyToOne(() => Produto, (produto) => produto.entrada, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    nullable: false
  })
  @JoinColumn({ name: "produto_id" })
  produto: Produto;

  constructor(
    quantidade: number,
    data_entrada: Date,
    produtos: Produto
  ) {
    this.quantidade = quantidade;
    this.data_entrada = data_entrada;
    this.produto = produtos;
  }
}

