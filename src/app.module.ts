import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizQuestionModule } from './quizQuestions/quizQuestions.module';
import { QuizTestModule } from './quizTest/quizTest.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    UsersModule,
    QuizQuestionModule,
    QuizTestModule,
    MongooseModule.forRoot(
      'mongodb+srv://QuizOnl:C8!pKG!u9knv@@b@atlascluster.rnetnvw.mongodb.net/',
    ),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
