import { Test, TestingModule } from '@nestjs/testing';
import { RandomUsersService } from './random-users.service';

describe('UsersService', () => {
  let service: RandomUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RandomUsersService],
    }).compile();

    service = module.get<RandomUsersService>(RandomUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
