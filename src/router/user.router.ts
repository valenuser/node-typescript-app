import { UserController } from "../controllers/userController";
import { BaseRouter } from "./router";

export class UserRouter extends BaseRouter<UserController>{
    constructor(){
        super(UserController)
    }

    routes(): void {
        this.router.get('/user',(req,res)=> this.controller.getUser(req,res))
    }
}