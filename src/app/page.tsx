'use client';

import { Button } from '@/components/Buttons/Button';
import { InputText } from '@/components/Input/InputText';
import { Wrapper } from '@/components/Wrapper';
import { todoProps } from '@/types/todos';
import { useState } from 'react';
import { TodoSection } from '../components/ToDo';
import ImgTodo from '@/assets/img_todo.svg';
import ImgDone from '@/assets/img_done.svg';
import EmptyTodo from '@/assets/img_todo_empty.svg';
import EmptyDone from '@/assets/img_done_empty.svg';
import { handleInputChange } from '@/actions/inputTextAction';
import { addToDo, message } from '@/actions/todoAction';

export default function Home() {
  const [todos, setTodos] = useState<todoProps[]>([]);
  const [text, setText] = useState<string | undefined>();
  const handleChange = handleInputChange(setText);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addToDo(text);
    if (message) {
      console.log(message);
    }
  };

  return (
    <Wrapper>
      <form onSubmit={onSubmit} className='w-full flex gap-8 tab:gap-16'>
        <InputText text={text} onChange={handleChange} />
        {todos ? <Button /> : <Button type='empty' />}
      </form>

      <section className='mt-40 flex flex-col gap-48 desk:grid desk:grid-cols-2 desk:gap-24'>
        <TodoSection
          title='To Do'
          img={ImgTodo}
          emptyImg={EmptyTodo}
          message={
            <>
              할 일이 없어요.
              <br />
              TODO를 새롭게 추가해주세요!
            </>
          }
        />
        <TodoSection
          title='Done'
          img={ImgDone}
          emptyImg={EmptyDone}
          message={
            <>
              아직 다 한 일이 없어요.
              <br />
              해야 할 일을 체크해보세요!
            </>
          }
        />
      </section>
    </Wrapper>
  );
}
