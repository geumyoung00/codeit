const API_URl = 'https://assignment-todolist-api.vercel.app/api';
const TENANT_ID = 'sihen';

/**전체 할 일 목록 호출. */
const fetchTodosAction = async () => {
  const res = await fetch(`${API_URl}/${TENANT_ID}/items`);
  if (!res.ok) throw new Error('할 일을 불러오지 못했습니다. 네트워크 상태를 확인해주세요.');
  return res.json();
};

/** 특정 할 일 호출.
 * @param id : 호출할 할 일의 id
 */
const fetchTodoAction = async (id: string) => {
  const res = await fetch(`${API_URl}/${TENANT_ID}/items/${id}`);
  if (!res.ok) throw new Error('할 일을 불러오지 못했습니다. 네트워크 상태를 확인해주세요.');
  return res.json();
};

/** 새로운 할 일 추가.
 * @param name : 추가할 할 일의 명
 */
const addToDoAction = async (name: string) => {
  const res = await fetch(`${API_URl}/${TENANT_ID}/items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  });

  if (!res.ok) throw new Error('등록에 실패했습니다. 다시 한 번 시도해주세요.');
};

/** 할 일의 완료상태를 업데이트
 * @param id : 업데이트할 할 일의 id
 * @param isCompleted : 업데이트할 할 일의 완료 여부 상태
 */
const updateToDoAction = async (id: number, isCompleted: boolean) => {
  const res = await fetch(`${API_URl}/${TENANT_ID}/items/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ isCompleted }),
  });

  if (!res.ok) throw new Error('할 일 상태 업데이트에 실패했습니다. 다시 시도해주세요.');
};

/** 할 일의 상세 정보를 업데이트 */
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
  const res = await fetch(`${API_URl}/${TENANT_ID}/items/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, memo, imageUrl, isCompleted }),
  });

  if (!res.ok) throw new Error('수정에 실패했습니다. 잠시 후 다시 시도해주세요.');
};

/**이미지 파일 업로드 후 url 반환 */
const updateImageAction = async (image: FormDataEntryValue) => {
  const formData = new FormData();
  formData.append('image', image);

  const res = await fetch(`${API_URl}/${TENANT_ID}/images/upload`, {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) throw new Error('이미지 업로드에 실패했습니다.');

  const { url } = await res.json();
  return { url };
};

/**특정 할 일을 삭제
 * @param id : 삭제할 할 일의 id
 */
const deleteAction = async (id: string) => {
  const res = await fetch(`${API_URl}/${TENANT_ID}/items/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) throw new Error('할 일 삭제에 실패했습니다. 네트워크 상태를 확인해주세요.');

  return res.json();
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
