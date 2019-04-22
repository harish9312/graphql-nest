import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { User } from './models/user';
import { NewUserInput } from './user.input';
import { UserService } from './users.service';

const pubSub = new PubSub();

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

    @Mutation(returns => User)
    async addUser(
        @Args('newUserData') newUserData: NewUserInput,
    ) {
        const userInstance = this.userService.createNewUser(newUserData);
        pubSub.publish('userAdded', { userAdded: userInstance });
        return userInstance;
    }

    @Subscription(returns => User)
    userAdded() {
        return pubSub.asyncIterator('userAdded');
    }
}
