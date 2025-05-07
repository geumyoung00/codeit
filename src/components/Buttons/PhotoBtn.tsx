'use client';

/**Todo 상세 이미지 버튼 컴포넌트
 * - 이미지를 추가하거나 수정
 * - 이미지 유무에 따라 다른 스타일과 아이콘을 렌더링
 */

import styled from 'styled-components';

import { useRef } from 'react';

import PhotoEdit from '@/assets/ico_photo_edit.svg';
import PhotoPlus from '@/assets/ico_photo_plus.svg';

interface PhotoBtnProps {
  imageUrl?: string | null;
}

export const PhotoBtn = ({ imageUrl }: PhotoBtnProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isEditMode = Boolean(imageUrl);
  const inputId = isEditMode ? 'editPhoto' : 'addPhoto';
  const ariaLabel = isEditMode ? '사진 수정' : '사진 추가';

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      fileInputRef.current?.click(); //키보드 접근성 처리
    }
  };

  return (
    <StyledBtn
      type='button'
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-pressed='false' // 선택 상태가 아니라면 false 유지
      role='button'
      className={isEditMode ? 'bg-slate-900/50 border-2 border-s-slate-900' : 'bg-slate-200'}
    >
      <AttachFileLabel htmlFor={inputId}>{isEditMode ? <PhotoEdit /> : <PhotoPlus />}</AttachFileLabel>
      <AttachFileInput type='file' id={inputId} name='image' ref={fileInputRef} tabIndex={-1} accept='image/*' />
    </StyledBtn>
  );
};

const StyledBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  position: absolute;
  right: 1.6rem;
  bottom: 1.6rem;
  overflow: hidden;

  &:focus {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }
`;

// 접근성 및 스타일을 위한 숨김 처리
const AttachFileInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  z-index: -1;
`;

// 접근성 및 스타일을 위한 숨김 처리
const AttachFileLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
`;
