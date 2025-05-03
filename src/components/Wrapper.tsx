import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  min-width: calc(744px - 48px);
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    /* 태블릿  */
    max-width: none;
    min-width: 0;
    width: calc(100% - 4.8rem);
  }

  @media screen and (max-width: 375px) {
    /* 모바일  */
    max-width: none;
    min-width: 0;
    width: calc(100% - 3.2rem);
  }
`;
