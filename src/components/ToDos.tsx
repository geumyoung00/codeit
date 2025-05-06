'use client';

import { TodoProps } from '@/types/todos';
import { ReactNode, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { InputCheck } from './Input/InputCheck';
import { useTodoStore } from '@/sotre/store';

const ToDoTitle = styled.h2`
  text-indent: -9999px;
  line-height: 0;
`;

const ToDoWraaper = styled.article``;

const EmptyWrapper = styled.div`
  svg {
    width: 12rem;
    height: 12rem;
  }

  p {
    font-weight: 700;
  }

  @media (min-width: 744px) {
    svg {
      width: 24rem;
      height: 24rem;
    }
  }
`;

export function TodoSection({
  title,
  img: TitleImage,
  arr,
  emptyImg: EmptyImage,
  message,
}: {
  title: string;
  img: React.ComponentType;
  arr: TodoProps[];
  emptyImg: React.ComponentType;
  message: ReactNode;
}) {
  // Zustand에서 handleUpdate 가져오기
  const { handleUpdate } = useTodoStore();

  const onChange = useCallback(
    (id: number, isCompleted: boolean) => {
      handleUpdate(id, !isCompleted);
    },
    [handleUpdate]
  );

  return (
    <ToDoWraaper>
      <ToDoTitle>
        {title}
        <TitleImage />
      </ToDoTitle>
      {arr.length < 1 ? (
        <EmptyWrapper className='flex flex-col items-center gap-24'>
          <EmptyImage />
          <p className='text-slate-400 text-center'>{message}</p>
        </EmptyWrapper>
      ) : (
        <div className='flex flex-col gap-16 mt-16'>
          {arr.map((el) => (
            <InputCheck
              key={el.id}
              id={el.id}
              label={el.name}
              isChecked={el.isCompleted}
              onChange={() => onChange(el.id, !el.isCompleted)} // 체크박스 변경 시 handleUpdate 호출
            />
          ))}
        </div>
      )}
    </ToDoWraaper>
  );
}
