import { PartialType } from '@nestjs/mapped-types';
import { CreateRandomUserDto } from './create-random-user.dto';

export class UpdateRandomUserDto extends PartialType(CreateRandomUserDto) {}
