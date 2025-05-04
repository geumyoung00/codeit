'use client';

/**버튼 컴포넌트
 * - type : default(add), edit, delete
 * - active : active 유무에 따라  스타일 변경, default === false
 * - mobile : mobile 사이즈에서 스타일 변경, default === false
 */

import styled, { css } from 'styled-components';
import Plus from '@/assets/ico_plus.svg';
import PlusWhite from '@/assets/ico_plus_w.svg';
import Delete from '@/assets/ico_delete.svg';
import Edit from '@/assets/ico_edit.svg';

interface styledBtnProps {
  $type?: string;
}

interface BtnProps {
  type?: string;
  className?: string;
}

export const Button = ({ type, className }: BtnProps) => {
  const label =
    type === 'edit' ? '수정하기' : type === 'save' ? '수정 완료' : type === 'delete' ? '삭제하기' : '추가하기';

  return (
    <BtnWrapper $type={type} className={className}>
      {type === 'edit' ? (
        <Btn className='bg-slate-200'>
          <Edit />
          {label}
        </Btn>
      ) : type === 'save' ? (
        <Btn className='bg-lime-300'>
          <Edit />
          {label}
        </Btn>
      ) : type === 'delete' ? (
        <Btn className='bg-rose-500 text-white'>
          <Delete />
          {label}
        </Btn>
      ) : type === 'empty' ? (
        <Btn className='bg-violet-600 text-white'>
          <PlusWhite />
          {label}
        </Btn>
      ) : (
        <Btn className='bg-slate-200'>
          <Plus />
          {label}
        </Btn>
      )}
    </BtnWrapper>
  );
};

const BtnWrapper = styled.div.attrs((props) => ({
  className: props.className,
}))<styledBtnProps>`
  width: 16.8rem;
  height: 5.6rem;
  padding-bottom: 0.4rem;
  padding-right: 0.365rem;
  position: relative;
  box-sizing: border-box;
  flex-shrink: 0;

  &::before {
    display: block;
    content: '';
    width: calc(100% - 0.365rem);
    height: calc(100% - 0.4rem);
    background: var(--color-slate-900);
    position: absolute;
    top: 4px;
    left: 0.365rem;
    border-radius: 2.4rem;
    z-index: -1;
  }

  ${(props) =>
    props.$type !== 'edit' &&
    props.$type !== 'save' &&
    props.$type !== 'delete' &&
    css`
      @media screen and (max-width: 1199px) {
        width: 16.2rem;
      }

      @media screen and (max-width: 743px) {
        /* 모바일 */
        width: 5.6rem;
        flex-basis: 5.6rem;
        flex-shrink: 0;

        button {
          grid-gap: 0;
          text-indent: -9999px;
        }
      }
    `}
`;

const Btn = styled.button<styledBtnProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 4px;
  font-weight: 700;
  width: 100%;
  height: 100%;
  border: 2px solid var(--color-slate-900);
  border-radius: 2.4rem;

  &:hover {
    cursor: pointer;
  }
`;
