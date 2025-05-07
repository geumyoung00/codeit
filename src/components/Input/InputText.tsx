'use client';

/**
 * InputText 컴포넌트
 * - 할 일을 입력받는 input 필드
 * - 부모에서 전달된 text와 onChange 핸들러를 사용
 */

import styled from 'styled-components';

interface InputTextProps {
  text?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = ({ text = '', onChange }: InputTextProps) => {
  return (
    <InputTextWrapper className='bg-slate-100 border-2 rounded-[24px] border-slate-950 flex items-center'>
      <input
        type='text'
        id='writeToDo'
        value={text}
        placeholder='할 일을 입력해주세요'
        onChange={onChange}
        aria-label='할 일 입력'
      />
    </InputTextWrapper>
  );
};

/** 입력 필드 외곽 컨테이너 */
const InputTextWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 5.25rem;
  margin-right: 0.4rem;
  margin-bottom: 0.35rem;
  box-sizing: border-box;
  box-shadow: 0.4rem 0.35rem var(--color-slate-900);

  input {
    box-sizing: border-box;
    height: 80%;
    width: calc(100% - 4.8rem);
    margin: 0 auto;
  }
  &::placeholder {
    color: var(--color-slate-400);
  }
`;
