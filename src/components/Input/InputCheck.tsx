'use client';

import styled from 'styled-components';
import Check from '@/assets/checked.svg';

export const InputCheck = () => {
  return (
    <CheckWrapper className='flex center justify-start'>
      <input type='checkbox' id='checkTest' />
      <label htmlFor='checkTest'>
        <i>
          <Check />
        </i>
        <strong>text</strong>
      </label>
    </CheckWrapper>
  );
};

const CheckWrapper = styled.div`
  box-sizing: border-box;

  input[type='checkbox'] {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
`;
