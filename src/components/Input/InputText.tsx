'use client';

import styled from 'styled-components';

/** InputText 컴포넌트 : 텍스트 입력 필드 커스텀 스타일링 */
export const InputText = () => {
  return (
    <InputTextWrapper className='bg-slate-100 border-2 rounded-[24px] border-slate-950 flex items-center'>
      <input type='text' id='textTest' className='font-normal' defaultValue={''} placeholder='할 일을 입력해주세요' />
    </InputTextWrapper>
  );
};

const InputTextWrapper = styled.div`
  position: relative;
  height: 5.25rem;
  box-sizing: border-box;
  box-shadow: 0.4rem 0.35rem var(--color-slate-900);
  margin-right: 0.4rem;
  margin-bottom: 0.35rem;
  box-sizing: border-box;

  input {
    box-sizing: border-box;
    height: 80%;
    width: calc(100% - 4.8rem);
    margin: 0 auto;
  }
`;
