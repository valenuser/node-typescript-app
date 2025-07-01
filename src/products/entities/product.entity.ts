import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { UserEntity } from "../../user/entities/user.entity";
import { PurchaseEntity } from "../../purchase/entities/purchase.entity";
import { CategoryEntity } from "../../categories/entities/category.entity";
import { PurchaseProductEntity } from "../../custom/entities/purchases-products.entity";

@Entity({name:"products"})
export class ProductEntity extends BaseEntity{

    @Column()
    product_name!:string

    @Column()
    description!:string

    @Column()
    price!:number

    
    @ManyToOne(()=>CategoryEntity,(category)=> category.products)
    @JoinColumn({name:"category_id"})
    category!:CategoryEntity


    @OneToMany(()=>PurchaseProductEntity,(purchaseProduct)=>purchaseProduct.product)
    purchaseProduct!:PurchaseProductEntity

}