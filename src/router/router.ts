import { Router } from "express";

export class BaseRouter<T>{
    public router: Router
    public controller: T

    //public middleware: U

    constructor(Controller: {new ():T}){
        this.router = Router()
        this.controller =  new Controller()
        this.routes()
        
    }

    routes(){

    }
}