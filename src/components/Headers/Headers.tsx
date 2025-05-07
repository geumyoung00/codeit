'use client';

import styled from 'styled-components';
import Link from 'next/link';

import Logo from '@/assets/logo.svg';
import { Wrapper } from '../Wrapper';

/**Gnb 컴포넌트
 * - 상단 헤더 영역 역할
 * - 로고 이미지 클릭 시 홈으로 이동
 */

export const Gnb = () => {
  return (
    <Header className='bg-white border-b-1 border-slate-200'>
      <Wrapper className=''>
        <h1 className='-indent-9999'>
          두잇 투두리스트
          <Link href='/' title='홈으로'>
            <Logo />
          </Link>
        </h1>
      </Wrapper>
    </Header>
  );
};

const Header = styled.header`
  padding: 1rem 0;
  height: 6rem;
  position: sticky;
  top: 0;
  box-sizing: border-box;
  z-index: 100;

  h1 {
    text-indent: -9999px;
    line-height: 0;
    width: fit-content;
  }

  a {
    display: block;
    height: 40px;
  }

  svg {
    height: inherit;
  }

  @media screen and (max-width: 1199px) {
    /* 태블릿  */
  }

  @media screen and (max-width: 743px) {
    /* 모바일 */
    a {
      width: 70px;
      overflow: hidden;
    }
  }
`;
