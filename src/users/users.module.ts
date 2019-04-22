import { Module } from '@nestjs/common';
import { UserResolver } from './users.resolver';
import { UserService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'User', schema: UserSchema,
        }]),
    ],
    providers: [UserResolver, UserService],
})

export class UserModule { }
