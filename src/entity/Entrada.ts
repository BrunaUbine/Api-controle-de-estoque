import { Entity, Column, PrimaryGeneratedColumn, Decimal128, IntegerType } from 'typeorm'
import  Produto  from "./Produto";

@Entity()
class Entrada{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantidade: number;

    @Column("decimal", { precision: 10, scale: 2 })
    preco: number;

    @Column()
    data_entrada: Date;

    constructor(quantidade: number, preco: number, data_entrada: Date){
        this.quantidade = quantidade;
        this.preco = preco;
        this.data_entrada = data_entrada;
    }
}

export default Entrada;



