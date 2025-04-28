import { Module } from '@nestjs/common';
import { RandomUsersService } from './random-users.service';
import { RandomUsersController } from './randomUsersController';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports:[
    PrismaModule,
  ],
  controllers: [RandomUsersController],
  providers: [RandomUsersService],
})
export class RandomUsersModule {}
