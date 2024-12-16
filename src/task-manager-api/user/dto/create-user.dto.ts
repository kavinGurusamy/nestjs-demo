import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsString } from 'class-validator';
import { IUser, Role } from 'src/shared/interface/user.interface';

export class CreateUserDto implements Omit<IUser, 'id'> {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({ description: 'Length should be minimum of 50' })
  @IsString()
  name: string;

  @ApiProperty()
  role: Role;
}
