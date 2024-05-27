import { Module } from '@nestjs/common'
import { UserController } from './users.controller'
import { UserService } from './users.service'
// import { TypeOrmModule } from '@nestjs/typeorm'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from './models/user.model'

@Module({
  imports: [SequelizeModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UsersModule {}
