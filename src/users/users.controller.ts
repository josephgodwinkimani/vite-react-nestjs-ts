import { Controller, Post, Body, Get } from '@nestjs/common'

export class User {
  id: number
  name: string
  email: string
}

@Controller('users')
export class UsersController {
  private users: User[] = []
  private idCounter = 1

  @Post()
  create(@Body() user: Omit<User, 'id'>): User {
    const newUser = { id: this.idCounter++, ...user }
    this.users.push(newUser)
    return newUser
  }

  @Get()
  findAll(): User[] {
    return this.users
  }
}
