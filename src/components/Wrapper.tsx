import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (min-width: 744px) {
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
