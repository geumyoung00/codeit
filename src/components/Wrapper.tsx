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
    width: calc(100% - 4.8rem);
  }

  @media screen and (max-width: 743px) {
    /* 모바일  */
    max-width: none;
    min-width: 0;
    width: calc(100% - 3.2rem);
  }
`;

export { Wrapper };
