import { RandomUser } from '../entities/randomUser.entity';

export type RandomUserDto = Omit<RandomUser, 'createdAt' | 'updatedAt' | 'deletedAt'>;
