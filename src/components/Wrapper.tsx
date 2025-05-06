'use client';

import styled from 'styled-components';

const Wrapper = styled.div.attrs((props) => ({
  className: props.className,
}))`
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 1199px) {
    /* 태블릿  */
    min-width: 0;
    width: 100%;
    padding: 0 2.4rem;
  }

  @media screen and (max-width: 743px) {
    /* 모바일  */
    max-width: none;
    min-width: 0;
    padding: 0 1.6rem;
  }
`;

const Container = styled(Wrapper)`
  min-height: calc(100vh - 6rem);
  padding-top: 2.4rem;

  @media screen and (max-width: 743px) {
    padding-top: 1.6rem;
  }
`;

const SubContainer = styled(Container)`
  &:has(form) {
    section,
    form > div {
      max-width: 996px;
      margin-right: auto;
      margin-left: auto;
    }
  }
`;

export { Wrapper, Container, SubContainer };
