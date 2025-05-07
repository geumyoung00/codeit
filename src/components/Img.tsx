'use client';

/**
 * Img 컴포넌트
 * - url이 존재하면 해당 이미지를 출력
 * - 존재하지 않으면 플레이스홀더 이미지(아이콘)를 표시
 */

import styled from 'styled-components';
import Image from 'next/image';
import ImgPhoto from '@/assets/img_photo.svg';

export default function Img({ url }: { url?: string | null }) {
  const hasImage = !!url;

  return (
    <ImgWrapper className={!hasImage ? 'border-2 border-slate-300 border-dashed flex justify-center items-center' : ''}>
      {hasImage ? <Image src={url!} fill alt='할 일 이미지' priority /> : <ImgPhoto />}
    </ImgWrapper>
  );
}

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 311px;
  background: var(--color-slate-50);
  border-radius: 24px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
