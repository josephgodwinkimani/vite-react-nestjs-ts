import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { TodosService } from './todos.service'

@Resolver('Todos')
export class TodosResolver {
  constructor(private readonly todoService: TodosService) {}

  @Query('todos')
  async getTodos() {
    return this.todoService.findAll()
  }

  @Query('todo')
  async getTodoById(@Args('id') id: number) {
    return this.todoService.findOne(id)
  }

  @Mutation('createTodo')
  async createNewTodo(@Args('createTodoInput') createTodoInput: { completed: boolean }) {
    return this.todoService.create(createTodoInput)
  }

  @Mutation('updateTodo')
  async updateExistingTodo(
    @Args('updateTodoInput')
    updateTodoInput: {
      id: number
      completed?: boolean
    },
  ) {
    return this.todoService.update(updateTodoInput)
  }

  @Mutation('removeTodo')
  async removeExistingTodo(@Args('id') id: number) {
    return this.todoService.remove(id)
  }
}
