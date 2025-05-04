'use client';

import styled, { css } from 'styled-components';
import Check from '@/assets/checked.svg';

interface InputCheckProps {
  isDetailed?: boolean;
  id: string;
}

interface StyledProps {
  $isDetailed?: boolean;
}

export const InputCheck = ({ isDetailed = false, id }: InputCheckProps) => {
  return (
    <CheckWrapper $isDetailed={isDetailed}>
      <Label $isDetailed={isDetailed} htmlFor={id}>
        <CheckboxInput type='checkbox' id={id} />
        <IconWrapper>
          <Check />
        </IconWrapper>
        <strong className='font-normal'>TEST TEXT</strong>
      </Label>
    </CheckWrapper>
  );
};

const CheckWrapper = styled.div<StyledProps>`
  padding: 0.9rem 1.2rem;
  background: #fff;
  border: 2px solid #0f172a;
  box-sizing: border-box;
  transition: 0.1s all ease-in-out;
  border-radius: ${(props) => (props.$isDetailed ? '2.4rem' : '2.7rem')};

  &:has(input[type='checkbox']:checked) {
    background: #ede9fe;
  }
`;

const Label = styled.label<StyledProps>`
  display: flex;
  align-items: center;
  width: 100%;
  ${(props) =>
    props.$isDetailed
      ? css`
          justify-content: center;
          strong {
            text-decoration: underline;
            font-size: 2rem;
            font-weight: 700;
          }
        `
      : css`
          justify-content: flex-start;
          &:has(input[type='checkbox']:checked) {
            strong {
              text-decoration: line-through;
            }
          }
        `}
`;

const IconWrapper = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.2rem;
  height: 3.2rem;
  background: #fefce8;
  border-radius: 50%;
  border: 2px solid #0f172a;
  transition: 0.1s all ease-in-out;
  margin-right: 1.6rem;

  svg {
    opacity: 0;
    transition: 0.1s opacity ease-in-out;
  }
`;

const CheckboxInput = styled.input`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  &:checked + ${IconWrapper} {
    background: #7c3aed;
    border-color: #7c3aed;

    svg {
      opacity: 1;
    }
  }
`;
