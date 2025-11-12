
import { Entity, Column, PrimaryGeneratedColumn, Decimal128, IntegerType } from 'typeorm'

@Entity()
class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  categoria: string;

  @Column()
  nome: string;

  @Column()
  preco_custo: Decimal128;

  @Column()
  preco_venda: Decimal128;

  @Column()
  estoque_atual: IntegerType;

  @Column()
  estoque_minimo: IntegerType;

  @Column()
  validade: Date;

  @Column()
  fornecedor: string;

  constructor(categoria: string, nome: string, preco_custo: Decimal128, preco_venda: Decimal128, estoque_atual: IntegerType, estoque_minimo: IntegerType, validade: Date, fornecedor: string){
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


