'use client';

/**
 * 할 일 섹션 컴포넌트
 * - 할 일 목록 렌더링
 * - 항목이 없으면 안내 메시지 출력
 */

import { ReactNode } from 'react';
import styled from 'styled-components';
import { useTodoStore } from '@/sotre/store';
import { TodoProps } from '@/types/todos';
import { InputCheck } from './Input/InputCheck';

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

  // 체크박스 변경 핸들러
  const onChange = (id: number, isDetail: boolean) => {
    handleUpdate(id, isDetail);
  };

  return (
    <ToDoWrapper>
      <ToDoTitle aria-hidden='true'>
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
              onChange={() => onChange(el.id, el.isCompleted)} // 체크박스 변경 시 handleUpdate 호출
            />
          ))}
        </div>
      )}
    </ToDoWrapper>
  );
}

const ToDoWrapper = styled.article``;

const ToDoTitle = styled.h2.attrs({ 'aria-hidden': true })`
  text-indent: -9999px;
  line-height: 0;
`;

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
