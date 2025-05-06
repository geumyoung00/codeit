'use client';

import styled from 'styled-components';
import PhotoEdit from '@/assets/ico_photo_edit.svg';
import PhotoPlus from '@/assets/ico_photo_plus.svg';
import { useRef } from 'react';

/**Todo 상세 이미지 버튼 컴포넌트
 *  - type : add(empty), edit
 */
export const PhotoBtn = ({ url }: { url?: string | null }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      fileInputRef.current?.click();
    }
  };
  return (
    <>
      <Btn
        type='button'
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-label={url ? '사진 수정' : '사진 추가'}
        className={url ? 'bg-slate-900/50 border-2 border-s-slate-900' : 'bg-slate-200'}
      >
        <AttachFileLabel htmlFor={url ? 'editPhoto' : 'addPhoto'}>
          {url ? <PhotoEdit /> : <PhotoPlus />}
        </AttachFileLabel>
        <AttachFileInput
          type='file'
          id={url ? 'editPhoto' : 'addPhoto'}
          name='image'
          ref={fileInputRef}
          tabIndex={-1}
          accept='image/*'
        />
      </Btn>
    </>
  );
};

const Btn = styled.button`
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

const AttachFileInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  z-index: -1;
`;

const AttachFileLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
`;
