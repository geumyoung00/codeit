'use client';

import React from 'react';
import styled, { css } from 'styled-components';
import Check from '@/assets/ico_checked.svg';

// InputCheck 컴포넌트의 props 타입
interface InputCheckProps {
  isDetailed?: boolean;
  id: number;
  label: string;
  isChecked: boolean;
  onChange: () => void;
}

// styled-components 내부 props 타입
interface StyledProps {
  $isDetailed?: boolean;
}

/* *체크박스 컴포넌트
 * - 체크 여부에 따라 상태변경
 * - 상세페이지(isDetailed)에서 정렬 방식 및 스타일 변경
 */

export const InputCheck: React.FC<InputCheckProps> = React.memo(
  ({ isDetailed = false, id, label, isChecked, onChange }) => {
    return (
      <CheckWrapper $isDetailed={isDetailed}>
        <Label $isDetailed={isDetailed} htmlFor={id.toString()}>
          <CheckboxInput type='checkbox' id={id.toString()} onChange={onChange} defaultChecked={isChecked} />
          <IconWrapper aria-hidden='true'>
            <Check />
          </IconWrapper>
        </Label>
        <strong>{label}</strong>
      </CheckWrapper>
    );
  }
);

const CheckWrapper = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  padding: 0.9rem 1.2rem;
  background: #fff;
  border: 2px solid #0f172a;
  box-sizing: border-box;
  transition: 0.1s all ease-in-out;
  border-radius: ${(props) => (props.$isDetailed ? '2.4rem' : '2.7rem')};

  &:hover,
  & > *:hover {
    cursor: pointer;
  }

  &:has(input[type='checkbox']:checked) {
    background: #ede9fe;
    strong {
      text-decoration: line-through;
    }
  }
`;

const Label = styled.label<StyledProps>`
  display: flex;
  align-items: center;

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
  margin-right: 1.6rem;
  background: var(--color-yellow-50);
  border-radius: 50%;
  border: 2px solid var(--color-slate-900);
  transition: 0.1s all ease-in-out;

  svg {
    opacity: 0;
    transition: 0.1s opacity ease-in-out;
  }
`;

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;

  &:focus + ${IconWrapper} {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }

  &:checked + ${IconWrapper} {
    background: var(--color-violet-600);
    border-color: var(--color-violet-600);

    svg {
      opacity: 1;
    }
  }
`;
