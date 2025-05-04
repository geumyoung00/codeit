'use client';

import styled from 'styled-components';

interface btnProps {
  $type?: string;
  $active?: boolean;
}

export const PhotoBtn = ({ type, active }: { type?: string; active?: boolean }) => {
  return (
    <>
      <Btn $type={type} $active={active} />
    </>
  );
};

const Btn = styled.button<btnProps>``;
