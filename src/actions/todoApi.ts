const fetchTodosAction = async () => {
  const response = await fetch(`https://assignment-todolist-api.vercel.app/api/sihen/items`);

  if (!response.ok) throw new Error('할 일을 불러오지 못했습니다. 네트워크 상태를 확인해주세요.');

  return response.json();
};

const fetchTodoAction = async (id: string) => {
  const response = await fetch(`https://assignment-todolist-api.vercel.app/api/sihen/items/${id}`);

  if (!response.ok) throw new Error('할 일을 불러오지 못했습니다. 네트워크 상태를 확인해주세요.');

  return response.json();
};

const addToDoAction = async (name: string) => {
  const response = await fetch(`https://assignment-todolist-api.vercel.app/api/sihen/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  });

  if (!response.ok) throw new Error('등록에 실패했습니다. 다시 한 번 시도해주세요.');
};

const updateToDoAction = async (id: number, isCompleted: boolean) => {
  const response = await fetch(`https://assignment-todolist-api.vercel.app/api/sihen/items/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ isCompleted }),
  });

  if (!response.ok) {
    throw new Error('할 일 상태 업데이트에 실패했습니다. 다시 시도해주세요.');
  }
};

const updateTodoDetailAction = async ({
  name,
  memo,
  imageUrl,
  isCompleted,
  id,
}: {
  name: string;
  memo?: string | null;
  imageUrl?: string | null;
  isCompleted: boolean;
  id: string;
}) => {
  const response = await fetch(`https://assignment-todolist-api.vercel.app/api/sihen/items/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, memo, imageUrl, isCompleted }),
  });

  if (!response.ok) throw new Error('수정에 실패했습니다. 잠시 후 다시 시도해주세요.');
};

const updateImageAction = async (image: FormDataEntryValue) => {
  const formData = new FormData();
  formData.append('image', image);

  const response = await fetch(`https://assignment-todolist-api.vercel.app/api/sihen/images/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) throw new Error('이미지 업로드에 실패했습니다.');

  const { url } = await response.json();

  return { url };
};

const deleteAction = async (id: string) => {
  const response = await fetch(`https://assignment-todolist-api.vercel.app/api/sihen/items/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) throw new Error('할 일 삭제에 실패했습니다. 네트워크 상태를 확인해주세요.');

  return response.json();
};

export {
  fetchTodosAction,
  fetchTodoAction,
  addToDoAction,
  updateToDoAction,
  updateTodoDetailAction,
  updateImageAction,
  deleteAction,
};
