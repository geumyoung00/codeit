import {
  addToDoAction,
  fetchTodosAction,
  fetchTodoAction,
  updateToDoAction,
  updateImageAction,
  updateTodoDetailAction,
} from '@/actions/todoApi';
import { TodoProps, TodoStoreState } from '@/types/todos';
import { create } from 'zustand';

export const useTodoStore = create<TodoStoreState>((set, get) => ({
  todos: [],
  done: [],
  todo: {
    id: 0,
    isCompleted: false,
    name: '',
  },
  fetchTodos: async () => {
    try {
      const results: TodoProps[] = await fetchTodosAction();

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
  fetchTodo: async (id) => {
    try {
      const result: TodoProps = await fetchTodoAction(id);
      set({ todo: result });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
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
  handleUpdate: async (id, isDetail) => {
    if (!isDetail) {
      const { todos, done } = get();
      const allTodos = [...todos, ...done];
      const todo = allTodos.find((item) => item.id === id);

      if (!todo) return;

      const updatedTodo = { ...todo, isCompleted: !todo!.isCompleted };
      // 로컬 상태를 즉시 업데이트
      const newTodos = allTodos.map((todo) => (todo.id === id ? updatedTodo : todo));

      try {
        await updateToDoAction(id, updatedTodo.isCompleted);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }

      set({
        todos: newTodos.filter((todo) => !todo.isCompleted),
        done: newTodos.filter((todo) => todo.isCompleted),
      });
    } else if (isDetail) {
      const { todo } = get();

      if (!todo) return;
      const updatedTodo = { ...todo, isCompleted: !todo?.isCompleted };

      set({ todo: updatedTodo });
    }
  },
  updateTodoDetail: async ({ id, name, memo, image, isCompleted }) => {
    try {
      if (!(image instanceof File)) throw new Error('이미지 파일을 선택해주세요.');

      const isEnglishName = image.name === '' || /^[A-Za-z0-9._-]+$/.test(image.name);
      if (!isEnglishName) throw new Error('파일명은 영문과 숫자만 가능합니다.');

      const isSizeValid = image.size <= 5 * 1024 * 1024;
      if (!isSizeValid) throw new Error('파일 크기는 5MB 이하여야 합니다.');

      let imageUrl = '';

      if (image.name !== '') {
        const { url } = await updateImageAction(image);
        imageUrl = url; // 이미지 URL 저장
      }

      await updateTodoDetailAction({ name, memo, imageUrl, isCompleted, id });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  },
}));
