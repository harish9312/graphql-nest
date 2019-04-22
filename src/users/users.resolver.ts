import { Resolver, Query, Args } from '@nestjs/graphql';
import { User } from './models/user';
import { UserService } from './users.service';

@Resolver(of => User)
export class UserResolver {
    constructor(private readonly userService: UserService) { }

    @Query(returns => User)
    async user(@Args('id') id: string): Promise<User> {
        const user = this.userService.findUserById(id);
        return user;
    }

    @Query(returns => [User])
    async allUsers(): Promise<User[]> {
        const user = this.userService.getAllUsers();
        return user;
    }
}
