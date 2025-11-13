import { Entity, Column, PrimaryGeneratedColumn, Decimal128, IntegerType } from 'typeorm'
import  Produto  from "./Produto";

@Entity()
class Saida{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantidade: number;

    @Column()
    data_saida: Date;

    constructor(quantidade: number, data_entrada: Date){
        this.quantidade = quantidade;
        this.data_saida = data_entrada;
    }
}

export default Saida;
