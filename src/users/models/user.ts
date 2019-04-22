import { ObjectType, ID, Field } from 'type-graphql';

@ObjectType()
export class User {
    @Field(type => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    username: string;

    @Field()
    email: string;
}
