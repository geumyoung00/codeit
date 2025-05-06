'use client';

import Img from '@/components/Img';
import { InputCheck } from '@/components/Input/InputCheck';
import { Container } from '@/components/Wrapper';
import { useTodoStore } from '@/sotre/store';
import { useRouter, useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { PhotoBtn } from '@/components/Buttons/PhotoBtn';
import Memo from '@/components/Memo';
import { Button } from '@/components/Buttons/Button';
import { deleteAction } from '@/actions/todoApi';

export default function DetailPage() {
  const { fetchTodo, todo, handleUpdate, updateTodoDetail } = useTodoStore();
  const { id } = useParams();
  const router = useRouter();

  const onChange = useCallback((id: number, isDetail: boolean) => {
    handleUpdate(id, isDetail);
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const memo = formData.get('memo') as string | null;
    const name = formData.get('name') as string;
    const image: FormDataEntryValue | null = formData.get('image');

    const isCompleted = formData.get('checkboxName') === 'on';

    updateTodoDetail({ id: id as string, name, memo, image, isCompleted });

    router.push('/');
  };

  const handleDelete = () => {
    deleteAction(id as string);
    router.replace('/');
  };

  useEffect(() => {
    fetchTodo(id as string);
  }, [fetchTodo]);

  return (
    <Container className='bg-white'>
      <form onSubmit={onSubmit}>
        <section className='mb-17'>
          <InputCheck
            key={todo!.id}
            id={todo!.id}
            label={todo!.name}
            isChecked={todo!.isCompleted}
            onChange={() => onChange(todo!.id, true)} // 체크박스 변경 시 handleUpdate 호출
            isDetailed
          />
        </section>
        <section className='relative mb-15'>
          <Img url={todo?.imageUrl} />
          <PhotoBtn url={todo?.imageUrl} />
        </section>
        <section>
          <Memo memo={todo?.memo} />
        </section>
        <div className='w-full flex gap-7 items-center justify-center my-24'>
          <Button type={todo?.isCompleted ? 'activeEdit' : 'edit'} />
          <Button type='delete' onClick={handleDelete} />
        </div>
      </form>
    </Container>
  );
}
