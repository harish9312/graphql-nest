import { User } from './models/user';
export declare class UserService {
    findUserById(id: string): Promise<User>;
    getAllUsers(): Promise<User[]>;
}
