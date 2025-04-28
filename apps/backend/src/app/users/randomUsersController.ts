import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RandomUsersService } from './random-users.service';
import { CreateRandomUserDto } from './dto/create-random-user.dto';
import { UpdateRandomUserDto } from './dto/update-random-user.dto';

@Controller('users')
export class RandomUsersController {
  constructor(private readonly randomUsersService: RandomUsersService) {}

  @Post()
  create(@Body() createRandomUserDto: CreateRandomUserDto) {
    return this.randomUsersService.create(createRandomUserDto);
  }

  @Get()
  findAll() {
    console.log('Fetching all users');
    return this.randomUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(`Fetching user with id: ${id}`);
    return this.randomUsersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateRandomUserDto) {
    return this.randomUsersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.randomUsersService.remove(id);
  }
}
