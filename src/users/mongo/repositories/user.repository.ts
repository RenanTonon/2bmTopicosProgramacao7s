import { Injectable } from "@nestjs/common";
import { Users } from "../interfaces/user.interface";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class UserRepository {
    constructor(
            @InjectModel('users') readonly userModel: Model<Users>
    ){}

    async create(nome:string,hash:string,role:string):Promise<Users>{
        const newUser = new this.userModel({ nome, senha: hash, role });
        return newUser.save();
    }

    async findByUsername(nome:string):Promise<Users | null>{
        return this.userModel.findOne({nome}).exec();;
    }
}