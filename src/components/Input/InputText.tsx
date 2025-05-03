'use client';

import styled from 'styled-components';

export const InputText = () => {
  return (
    <InputTextWrapper className='bg-slate-100 border-2 rounded-full border-slate-950 flex items-center'>
      <input type='text' id='textTest' className='font-normal' />
    </InputTextWrapper>
  );
};

const InputTextWrapper = styled.div`
  position: relative;
  height: 5.25rem;
  box-sizing: border-box;
  box-shadow: 0.4rem 0.35rem #0f172a;
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
