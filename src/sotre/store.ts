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
  /** 전체 Todo 목록 조회 */
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
      if (error instanceof Error) alert(error.message);
      console.error('Failed to fetch todos:', error);
    }
  },
  /** 단일 Todo 조회 (상세 페이지) */
  fetchTodo: async (id) => {
    try {
      const result: TodoProps = await fetchTodoAction(id);
      set({ todo: result });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
      console.error('Failed to fetch todo:', error);
    }
  },
  /** 새로운 Todo 추가 */
  addTodo: async (newTodo) => {
    try {
      if (!newTodo || typeof newTodo !== 'string') {
        throw new Error('할 일을 입력해주세요.');
      }
      await addToDoAction(newTodo);
      await get().fetchTodos(); // 추가 후 목록 재요청
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  },
  /** Todo 완료 여부 토글 */
  handleUpdate: async (id, isDetail) => {
    if (isDetail) {
      const { todo } = get();
      if (!todo) return;

      const updatedTodo = { ...todo, isCompleted: !todo?.isCompleted };
      set({ todo: updatedTodo });
    } else {
      const { todos, done } = get();
      const allTodos = [...todos, ...done];
      const target = allTodos.find((item) => item.id === id);
      if (!target) return;

      // 로컬 상태를 즉시 업데이트
      const updatedTodo = { ...target, isCompleted: !target!.isCompleted };
      const updatedList = allTodos.map((todo) => (todo.id === id ? updatedTodo : todo));

      try {
        await updateToDoAction(id, updatedTodo.isCompleted);
        set({
          todos: updatedList.filter((t) => !t.isCompleted),
          done: updatedList.filter((t) => t.isCompleted),
        });
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  },
  /** Todo 상세 정보 업데이트 */
  updateTodoDetail: async ({ id, name, memo, image }) => {
    const { todo } = get();
    if (!todo) return;

    const { imageUrl } = todo;

    try {
      if (!(image instanceof File)) throw new Error('이미지 파일을 선택해주세요.');

      // 이미지가 기존에 있고 새 파일 선택 안 했을 때
      if (imageUrl && image.name === '') {
        await updateTodoDetailAction({ name, memo, isCompleted: todo.isCompleted, id });
        return;
      }

      if (!imageUrl) {
        if (!(image instanceof File)) throw new Error('이미지 파일을 선택해주세요.');
        const isValidName = /^[A-Za-z0-9._-]+$/.test(image.name);
        if (!isValidName) throw new Error('파일명은 영문과 숫자만 가능합니다.');

        const isSizeValid = image.size <= 5 * 1024 * 1024;
        if (!isSizeValid) throw new Error('파일 크기는 5MB 이하여야 합니다.');

        const { url } = await updateImageAction(image); // 이미지 업로드
        await updateTodoDetailAction({ name, memo, imageUrl: url, isCompleted: todo.isCompleted, id });
      }
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  },
}));
