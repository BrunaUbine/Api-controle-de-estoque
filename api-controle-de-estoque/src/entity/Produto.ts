
import { Entity, Column, PrimaryGeneratedColumn, Decimal128, IntegerType } from 'typeorm'

@Entity()
class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  categoria: string;

  @Column()
  nome: string;

  @Column("decimal", { precision: 10, scale: 2 })
  preco_custo: number;

  @Column("decimal", { precision: 10, scale: 2 })
  preco_venda: number;

  @Column()
  estoque_atual: number;

  @Column()
  estoque_minimo: number;

  @Column()
  validade: Date;

  @Column()
  fornecedor: string;

  constructor(categoria: string, nome: string, preco_custo: number, preco_venda: number, estoque_atual: number, estoque_minimo: number, validade: Date, fornecedor: string){
    this.categoria = categoria;
    this.nome = nome;
    this.preco_custo = preco_custo;
    this.preco_venda = preco_venda;
    this.estoque_atual = estoque_atual;
    this.estoque_minimo = estoque_minimo;
    this.validade = validade;
    this.fornecedor = fornecedor;
  }
}

export default Produto;


