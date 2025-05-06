'use client';

import ImgPhoto from '@/assets/img_photo.svg';
import styled from 'styled-components';

export default function Img({ url }: { url?: string | null }) {
  return (
    <>
      {url ? (
        //url 있을 떄
        <ImgWrapper>
          <img src={`${url}`} />
        </ImgWrapper>
      ) : (
        // url 없을 때
        <ImgWrapper className='border-2 border-slate-300 border-dashed flex justify-center items-center'>
          <ImgPhoto />
        </ImgWrapper>
      )}
    </>
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
