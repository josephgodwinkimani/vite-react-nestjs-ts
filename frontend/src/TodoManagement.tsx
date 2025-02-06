import { gql } from '@apollo/client';
import * as React from 'react';
import { useQuery, useMutation } from '@apollo/client';

export const GET_TODOS = gql`
  query GetTodos {
    todos {
      id
      completed
    }
  }
`;

export const CREATE_TODO = gql`
  mutation CreateTodo($createTodoInput: CreateTodoInput!) {
    createTodo(createTodoInput: $createTodoInput) {
      id
      completed
    }
  }
`;

export interface Todo {
    id: number;
    completed: boolean;
}

function TodoManagement() {
    const { loading, error, data } = useQuery(GET_TODOS);
    const [createTodo] = useMutation(CREATE_TODO, {
        refetchQueries: [{ query: GET_TODOS }], // Refetch todos after creating a new one
    });

    const [completed, setCompleted] = React.useState(false); // State for new todo input

    const handleAddTodo = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await createTodo({
            variables: {
                createTodoInput: { completed },
            },
        });
        setCompleted(false); // Reset the input after submission
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {data.todos.map((todo: Todo) => (
                    <li key={todo?.id}>
                        Todo ID: {todo?.id}, Completed: {todo?.completed ? 'Yes' : 'No'}
                    </li>
                ))}
            </ul>

            <form onSubmit={handleAddTodo}>
                <label>
                    Completed:
                    <input
                        type="checkbox"
                        checked={completed}
                        onChange={(e) => setCompleted(e.target.checked)}
                    />
                </label>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}

export default TodoManagement;