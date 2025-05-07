'use client';

/**버튼 컴포넌트
 * @prop type: 'default'(add), 'edit', 'activeEdit', 'delete', 'empty'
 * @prop onClick: 클릭 이벤트
 * @prop className: 커스텀 클래스명 전달
 */

import styled, { css } from 'styled-components';
import Plus from '@/assets/ico_plus.svg';
import PlusWhite from '@/assets/ico_plus_w.svg';
import Delete from '@/assets/ico_delete.svg';
import Edit from '@/assets/ico_edit.svg';

interface styledBtnProps {
  $actionType?: string;
}

interface BtnProps {
  type?: 'button' | 'submit' | 'reset';
  actionType?: string;
  onClick?: () => void;
  className?: string;
}

export const Button = ({ type = 'button', actionType = 'default', onClick, className }: BtnProps) => {
  const isEdit = actionType === 'edit';
  const isActiveEdit = actionType === 'activeEdit';
  const isDelete = actionType === 'delete';
  const isEmpty = actionType === 'empty';

  const label = isEdit || isActiveEdit ? '수정 완료' : isDelete ? '삭제하기' : '추가하기';

  const renderIcon = () => {
    if (isEdit || isActiveEdit) return <Edit />;
    if (isDelete) return <Delete />;
    if (isEmpty) return <PlusWhite />;
    return <Plus />;
  };

  const btnClass = isEdit
    ? 'bg-slate-200'
    : isActiveEdit
    ? 'bg-lime-300'
    : isDelete
    ? 'bg-rose-500 text-white'
    : isEmpty
    ? 'bg-violet-600 text-white'
    : 'bg-slate-200';

  return (
    <BtnWrapper $actionType={actionType} className={className}>
      <Btn type={type} className={btnClass} onClick={onClick}>
        {renderIcon()}
        {label}
      </Btn>
    </BtnWrapper>
  );
};

// 버튼 타입별 위치 조정 및 모바일 스타일 포함
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

  &::after {
    display: block;
    content: '';
    width: calc(100% - 0.365rem);
    height: calc(100% - 0.4rem);
    background: var(--color-slate-900);
    position: absolute;
    top: 4px;
    left: 0.365rem;
    border-radius: 2.4rem;
  }

  ${(props) =>
    !['edit', 'activeEdit', 'delete'].includes(props.$actionType || '') &&
    css`
      @media screen and (max-width: 1199px) {
        width: 16.2rem;
      }

      @media screen and (max-width: 743px) {
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

// 버튼 내부 스타일
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
  position: relative;
  z-index: 1;

  &:hover {
    cursor: pointer;
  }
`;
