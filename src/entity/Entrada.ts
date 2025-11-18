import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import Produto from "./Produto.js";

@Entity()
class Entrada {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "int" })
  quantidade: number;

  @Column("decimal", { precision: 10, scale: 2 })
  preco: number;

  @Column({ type: "timestamp" })
  data_entrada: Date;

  @ManyToOne(() => Produto, (produto) => produto.entradas, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    nullable: false
  })
  @JoinColumn({ name: "produto_id" })
  produtos: Produto;

  constructor(
    quantidade: number,
    preco: number,
    data_entrada: Date,
    produtos: Produto
  ) {
    this.quantidade = quantidade;
    this.preco = preco;
    this.data_entrada = data_entrada;
    this.produtos = produtos;
  }
}

export default Entrada;
