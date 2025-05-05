const fetchTodoAction = async () => {
  const response = await fetch(`https://assignment-todolist-api.vercel.app/api/sihen/items`);

  if (!response.ok) throw new Error('할 일을 불러오지 못했습니다. 네트워크 상태를 확인해주세요.');

  return await response.json();
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

export { fetchTodoAction, addToDoAction, updateToDoAction };
