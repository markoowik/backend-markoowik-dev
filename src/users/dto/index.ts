import { IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDTO {
  @ApiProperty()
  @IsString()
  firstname: string

  @ApiProperty()
  @IsString()
  username: string

  @ApiProperty()
  @IsString()
  email: string

  @ApiProperty()
  @IsString()
  password: string
}

export class UpdateUserDto {
  @ApiProperty()
  @IsString()
  firstname: string

  @ApiProperty()
  @IsString()
  username: string

  @ApiProperty()
  @IsString()
  email: string
}
