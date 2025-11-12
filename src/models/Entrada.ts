import { Entity, Column, PrimaryGeneratedColumn, Decimal128, IntegerType } from 'typeorm'
import  Produto  from "./Produto";

@Entity()
class Entrada{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantidade: IntegerType;

    @Column()
    preco: Decimal128;

    @Column()
    data_entrada: Date;

    constructor(quantidade: IntegerType, preco: Decimal128, data_entrada: Date){
        this.quantidade = quantidade;
        this.preco = preco;
        this.data_entrada = data_entrada;
    }
}

export default Entrada;



