import { Test, TestingModule } from '@nestjs/testing';
import { RandomUsersController } from './randomUsersController';
import { RandomUsersService } from './random-users.service';
import { PrismaService } from '../../prisma/prisma.service';

describe('UsersController', () => {
  let controller: RandomUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RandomUsersController],
      providers: [RandomUsersService,PrismaService],
    }).compile();

    controller = module.get<RandomUsersController>(RandomUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

});
