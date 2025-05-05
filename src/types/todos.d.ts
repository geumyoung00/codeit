interface todoProps {
  isCompleted: boolean;
  name: string;
  tenantId?: string;
  memo?: string | null;
  imageUrl?: string | null;
  id: number;
}

interface TodoStoreState {
  todos: todoProps[];
  done: todoProps[];
  fetchTodos: () => Promise<void>;
  addTodo: (todo: string | undefined) => Promise<void>;
  handleUpdate: (id: number, isCompleted: boolean) => Promise<void>;
}

export { TodoProps, TodoStoreState };
