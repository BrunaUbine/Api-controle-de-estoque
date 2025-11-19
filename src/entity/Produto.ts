import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Entrada}  from "./Entrada.js";
import { Saida } from "./Saida.js";

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  categoria: string;

  @Column("text")
  nome: string;

  @Column("decimal", { precision: 10, scale: 2 })
  preco_custo: number;

  @Column("decimal", { precision: 10, scale: 2 })
  preco_venda: number;

  @Column("int", { default: 0 })
  estoque_atual: number;

  @Column("int", { default: 0 })
  estoque_minimo: number;

  @Column("date", { nullable: true })
  validade: Date;

  @Column("text", { nullable: true })
  fornecedor: string;

  @OneToMany(() => Entrada, (entrada) => entrada.produto)
  entrada: Entrada[];

  @OneToMany(() => Saida, (saida) => saida.produto)
  saida: Saida[];
}


