import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateRandomUserDto } from './dto/create-random-user.dto';
import { UpdateRandomUserDto } from './dto/update-random-user.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { RandomUserDto } from './dto/randomUserDto';

@Injectable()
export class RandomUsersService {
  constructor(
    @Inject(PrismaService) private readonly prismaService: PrismaService
  ) {}

  async create(
    createRandomUserDto: CreateRandomUserDto
  ): Promise<RandomUserDto> {
    const newRandomUser = await this.prismaService.randomUser.create({
      data: createRandomUserDto,
    });

    if (!newRandomUser) {
      throw new InternalServerErrorException(
        'Internal server error. please try again'
      );
    }

    return newRandomUser as RandomUserDto;
  }

  async findAll() {
    const allUsers = await this.prismaService.randomUser.findMany({});
    return allUsers;
  }

  async findOne(id: string): Promise<RandomUserDto | null> {
    const user = await this.prismaService.randomUser.findFirst({
      where: { login: { uuid: id } },
    });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async update(
    id: string,
    updateUserDto: UpdateRandomUserDto
  ): Promise<RandomUserDto> {

    const user = await this.prismaService.randomUser.findFirst({
      where: { login:{uuid: id }}, // this might depend on Prisma version
    });

    if (!user) throw new NotFoundException('User not found');

    const updatedUser = await this.prismaService.randomUser.update({
      where: { id: user.id },
      data: updateUserDto,
    });
    return updatedUser;
  }

  async remove(id: string) {
    console.log(`Deleting user with id: ${id}`);

    const user = await this.prismaService.randomUser.findFirst({
      where: {
        login: {
          uuid: id,
        },
      },
    });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    const deletedUser = await this.prismaService.randomUser.delete({
      where: { id:user.id },
    });

    return deletedUser;
  }
}
