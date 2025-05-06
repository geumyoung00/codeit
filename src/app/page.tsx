'use client';

import { Button } from '@/components/Buttons/Button';
import { InputText } from '@/components/Input/InputText';
import { Container } from '@/components/Wrapper';
import { useEffect, useState } from 'react';
import { TodoSection } from '../components/ToDos';
import ImgTodo from '@/assets/img_todo.svg';
import ImgDone from '@/assets/img_done.svg';
import EmptyTodo from '@/assets/img_todo_empty.svg';
import EmptyDone from '@/assets/img_done_empty.svg';
import { handleInputChange } from '@/actions/inputTextAction';
import { useTodoStore } from '@/sotre/store';

export default function Home() {
  const { todos, done, fetchTodos, addTodo } = useTodoStore();
  const [text, setText] = useState<string | undefined>();
  const handleChange = handleInputChange(setText);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addTodo(text);
    setText('');
  };

  return (
    <Container className=''>
      <form onSubmit={onSubmit} className='w-full flex gap-8 tab:gap-16'>
        <InputText text={text} onChange={handleChange} />
        {todos ? <Button /> : <Button type='empty' />}
      </form>

      <section className='my-24 flex flex-col gap-48 desk:grid desk:grid-cols-2 desk:gap-24'>
        <TodoSection
          title='To Do'
          img={ImgTodo}
          arr={todos}
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
          arr={done}
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
    </Container>
  );
}
