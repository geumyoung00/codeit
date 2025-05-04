'use client';

import { ReactNode } from 'react';
import styled from 'styled-components';

const ToDoTitle = styled.h2`
  text-indent: -9999px;
  line-height: 0;
`;

const ToDoWraaper = styled.article`
  div {
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
  }
`;

export function TodoSection({
  title,
  img: TitleImage,
  emptyImg: EmptyImage,
  message,
}: {
  title: string;
  img: React.ComponentType;
  emptyImg: React.ComponentType;
  message: ReactNode;
}) {
  return (
    <ToDoWraaper className=''>
      <ToDoTitle>
        {title}
        <TitleImage />
      </ToDoTitle>
      <div className='flex flex-col items-center gap-24'>
        <EmptyImage />
        <p className='text-slate-400 text-center'>{message}</p>
      </div>
    </ToDoWraaper>
  );
}
