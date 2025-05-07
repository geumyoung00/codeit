'use client';

import { useEffect, useState } from 'react';
import { handleInputChange } from '@/actions/inputTextAction';
import { useTodoStore } from '@/sotre/store';

import { Button } from '@/components/Buttons/Button';
import { InputText } from '@/components/Input/InputText';
import { Container } from '@/components/Wrapper';
import { TodoSection } from '../components/ToDos';

import ImgTodo from '@/assets/img_todo.svg';
import ImgDone from '@/assets/img_done.svg';
import EmptyTodo from '@/assets/img_todo_empty.svg';
import EmptyDone from '@/assets/img_done_empty.svg';

export default function Home() {
  const { todos, done, fetchTodos, addTodo } = useTodoStore();

  // 입력창 text 상태관리
  const [text, setText] = useState<string | undefined>('');
  const handleChange = handleInputChange(setText);

  // 최초 로딩
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  // 할 일 추가하기
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await addTodo(text);
    setText('');
  };

  return (
    <Container className=''>
      {/* 새로운 할 일 입력폼 */}
      <form onSubmit={handleSubmit} className='w-full flex gap-8 tab:gap-16'>
        <InputText text={text} onChange={handleChange} />
        <Button type='submit' actionType={todos && todos.length > 0 ? '' : 'empty'} />
      </form>

      {/* 해야할 일 목록 */}
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

        {/* 완료한 일 목록 */}
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
