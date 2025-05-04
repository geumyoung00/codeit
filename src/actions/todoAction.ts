let message: string;

const addToDo = async (name: string | undefined) => {
  try {
    if (!name) {
      throw new Error('할 일을 입력해주세요.');
    }

    await fetch(`https://assignment-todolist-api.vercel.app/api/sihen/items`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name }),
    }).then((res) => {
      console.log(res);
    });
  } catch (error) {
    if (error instanceof Error) {
      message = error.message;
      return { message };
    }
  }
};

export { addToDo, message };
