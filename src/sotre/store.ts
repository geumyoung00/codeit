import { addToDoAction, fetchTodoAction, updateToDoAction } from '@/actions/todoApi';
import { TodoProps, TodoStoreState } from '@/types/todos';
import { create } from 'zustand';

export const useTodoStore = create<TodoStoreState>((set, get) => ({
  todos: [],
  done: [],
  fetchTodos: async () => {
    try {
      const results: TodoProps[] = await fetchTodoAction();

      const { newTodos, newDone } = results.reduce(
        (acc, todo) => {
          if (todo.isCompleted) {
            acc.newDone.push(todo);
          } else {
            acc.newTodos.push(todo);
          }
          return acc;
        },
        { newTodos: [] as TodoProps[], newDone: [] as TodoProps[] }
      );

      set({ todos: newTodos, done: newDone });
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
      console.error('Failed to fetch todos:', error);
    }
  },
  addTodo: async (newTodo) => {
    try {
      if (!newTodo || typeof newTodo !== 'string') throw new Error('할 일을 입력해주세요.');

      await addToDoAction(newTodo);
      await get().fetchTodos();
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  },
  handleUpdate: async (id) => {
    const { todos, done } = get();
    const allTodos = [...todos, ...done];
    const todo = allTodos.find((todo) => todo.id === id);

    if (todo) {
      const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };

      // 로컬 상태를 즉시 업데이트
      const newTodos = allTodos.map((todo) => (todo.id === id ? updatedTodo : todo));

      set({
        todos: newTodos.filter((todo) => !todo.isCompleted),
        done: newTodos.filter((todo) => todo.isCompleted),
      });

      try {
        await updateToDoAction(id, updatedTodo.isCompleted);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  },
}));
