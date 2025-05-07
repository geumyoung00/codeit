'use client';

import { useRouter, useParams } from 'next/navigation';
import { useCallback, useEffect } from 'react';

import { useTodoStore } from '@/sotre/store';
import { deleteAction } from '@/actions/todoApi';

import Img from '@/components/Img';
import { InputCheck } from '@/components/Input/InputCheck';
import { SubContainer } from '@/components/Wrapper';
import Memo from '@/components/Memo';
import { PhotoBtn } from '@/components/Buttons/PhotoBtn';
import { Button } from '@/components/Buttons/Button';

export default function DetailPage() {
  const { fetchTodo, todo, handleUpdate, updateTodoDetail } = useTodoStore();
  const { id } = useParams();
  const router = useRouter();

  // checkbox 핸들러
  const onChange = useCallback(
    (id: number, isDetail: boolean) => {
      handleUpdate(id, isDetail);
    },
    [handleUpdate]
  );

  // 상세 수정 제출 핸들러
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

  //할 일 삭제 핸들러
  const handleDelete = async () => {
    try {
      await deleteAction(id as string);
      router.replace('/');
    } catch (error) {
      alert('삭제에 실패했습니다. 다시 시도해주세요.');
    }
  };

  // 마운트 시 데이터 fetch
  useEffect(() => {
    fetchTodo(id as string);
  }, [fetchTodo, id]);

  return (
    <SubContainer className='bg-white'>
      <form onSubmit={onSubmit}>
        <section className='mb-17'>
          <InputCheck
            key={todo!.id}
            id={todo!.id}
            label={todo!.name}
            isChecked={todo!.isCompleted}
            onChange={() => onChange(todo!.id, true)}
            isDetailed
          />
        </section>

        <section className='desk:flex desk:gap-24'>
          <div className='relative mb-15 desk:w-[384px] desk:shrink-0'>
            <Img url={todo!.imageUrl} />
            <PhotoBtn imageUrl={todo!.imageUrl} />
          </div>
          <Memo memo={todo?.memo} />
        </section>

        <div className='w-full flex gap-7 items-center justify-center my-24 desk:justify-end'>
          <Button type='submit' actionType={todo!.isCompleted ? 'activeEdit' : 'edit'} />
          <Button actionType='delete' onClick={handleDelete} />
        </div>
      </form>
    </SubContainer>
  );
}
