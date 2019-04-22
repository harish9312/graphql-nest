import { Injectable } from '@nestjs/common';
import { User } from './models/user';
import Axios from 'axios';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model) { }
    async findUserById(id: string): Promise<User> {
        try {
            const response = await Axios.get('https://jsonplaceholder.typicode.com/users');
            return response.data.find((userData) => userData.id === Number(id));
        } catch (error) {
            throw error;
        }
    }

    async getAllUsers(): Promise<User[]> {
        try {
            const response = await Axios.get('https://jsonplaceholder.typicode.com/users');
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    async createNewUser(userData: any): Promise<User> {
        try {
            const userInstance = await this.userModel(userData).save();
            return userInstance;
        } catch (error) {
            throw error;
        }
    }
}
