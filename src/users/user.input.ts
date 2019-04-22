import { Field, InputType, ID } from 'type-graphql';
import { MaxLength, IsOptional, Length } from 'class-validator';

@InputType()
export class NewUserInput {
    @Field()
    name: string;

    @Field()
    username: string;

    @Field()
    email: string;
}
