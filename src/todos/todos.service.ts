import { Injectable } from '@nestjs/common'

export interface Todo {
  id: number
  completed: boolean
}

@Injectable()
export class TodosService {
  private todos: Todo[] = []
  private currentId = 1

  findAll(): Todo[] {
    return this.todos
  }

  findOne(id: number): Todo | undefined {
    return this.todos.find((todo) => todo.id === id)
  }

  create(createTodoInput: { completed: boolean }): Todo {
    const newTodo = { id: this.currentId++, ...createTodoInput }
    this.todos.push(newTodo)
    return newTodo
  }

  update(updateTodoInput: { id: number; completed?: boolean }): Todo | undefined {
    const todo = this.findOne(updateTodoInput.id)
    if (todo) {
      if (updateTodoInput.completed !== undefined) {
        todo.completed = updateTodoInput.completed
      }
      return todo
    }
    return undefined
  }

  remove(id: number): Todo | undefined {
    const index = this.todos.findIndex((todo) => todo.id === id)
    if (index > -1) {
      return this.todos.splice(index, 1)[0]
    }
    return undefined
  }
}
