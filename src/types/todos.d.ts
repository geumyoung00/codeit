interface TodoProps {
  id: number;
  isCompleted: boolean;
  name: string;
  tenantId?: string;
  memo?: string | null;
  imageUrl?: string | null;
}

interface TodoStoreState {
  todos: TodoProps[];
  done: TodoProps[];
  todo: TodoProps | null;
  fetchTodos: () => Promise<void>;
  fetchTodo: (id: string) => Promise<void>;
  addTodo: (todo: string | undefined) => Promise<void>;
  handleUpdate: (id: number, isDetail: boolean) => Promise<void>;
  updateTodoDetail: ({
    id,
    name,
    memo,
    image,
    isCompleted,
  }: {
    id: string;
    name: string;
    memo: string | null;
    image: FormDataEntryValue | null;
    isCompleted: boolean;
  }) => Promise<void>;
}

export { TodoProps, TodoStoreState };
