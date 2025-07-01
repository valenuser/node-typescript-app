import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { UserEntity } from "../../user/entities/user.entity";
import { PurchaseEntity } from "../../purchase/entities/purchase.entity";
import { ProductEntity } from "../../products/entities/product.entity";

@Entity({name:"categories"})
export class CategoryEntity extends BaseEntity{

    @Column()
    category_name!:string


    @OneToMany(()=>ProductEntity,(products)=> products.category)
    products!: ProductEntity[]

}