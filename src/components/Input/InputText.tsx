'use client';

import { SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';

interface InputTextProps {
  text?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/** InputText 컴포넌트 : 텍스트 입력 필드 커스텀 스타일링 */
export const InputText: React.FC<InputTextProps> = ({ text = '', onChange }) => {
  return (
    <InputTextWrapper className='bg-slate-100 border-2 rounded-[24px] border-slate-950 flex items-center'>
      <input
        type='text'
        id='writeToDo'
        className='font-normal'
        value={text}
        placeholder='할 일을 입력해주세요'
        onChange={onChange}
      />
    </InputTextWrapper>
  );
};

const InputTextWrapper = styled.div`
  width: 100%;
  height: 5.25rem;
  box-sizing: border-box;
  box-shadow: 0.4rem 0.35rem var(--color-slate-900);
  margin-right: 0.4rem;
  margin-bottom: 0.35rem;
  box-sizing: border-box;
  position: relative;

  input {
    box-sizing: border-box;
    height: 80%;
    width: calc(100% - 4.8rem);
    margin: 0 auto;
  }
`;
