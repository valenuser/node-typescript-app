import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CustomerEntity } from "../../customers/entities/cutomer.entity";

@Entity({name:"users"})
export class UserEntity extends BaseEntity{


    @Column()
    name!:string

    @Column()
    lastname!:string

    @Column()
    username!:string

    @Column()
    email!:string

    @Column()
    password!: string

    @Column()
    city!: string

    @Column()
    province!: string

    @OneToOne(()=>CustomerEntity,(customer)=>customer.user)
    customer!:CustomerEntity

}