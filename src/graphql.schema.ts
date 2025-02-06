
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateTodoInput {
    completed?: Nullable<boolean>;
}

export class UpdateTodoInput {
    id: number;
    completed?: Nullable<boolean>;
}

export class Todo {
    id?: Nullable<number>;
    completed?: Nullable<boolean>;
}

export abstract class IQuery {
    abstract todos(): Nullable<Todo>[] | Promise<Nullable<Todo>[]>;

    abstract todo(id: number): Nullable<Todo> | Promise<Nullable<Todo>>;
}

export abstract class IMutation {
    abstract createTodo(createTodoInput: CreateTodoInput): Todo | Promise<Todo>;

    abstract updateTodo(updateTodoInput: UpdateTodoInput): Todo | Promise<Todo>;

    abstract removeTodo(id: number): Nullable<Todo> | Promise<Nullable<Todo>>;
}

type Nullable<T> = T | null;
