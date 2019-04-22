import { User } from './models/user';
import { UserService } from './users.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    user(id: string): Promise<User>;
    allUsers(): Promise<User[]>;
}
