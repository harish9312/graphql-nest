import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { WSGateway } from './WSGateway';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot('mongodb://soni:soni1234@ds145456.mlab.com:45456/graph-test', { useNewUrlParser: true }),
    GraphQLModule.forRoot({
      // installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, WSGateway],
})
export class AppModule { }
