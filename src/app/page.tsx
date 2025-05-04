'use client';

import { InputCheck } from '@/components/Input/InputCheck';
import { InputText } from '@/components/Input/InputText';
import { Wrapper } from '@/components/Wrapper';

export default function Home() {
  return (
    <Wrapper>
      <InputText />
      <InputCheck />
      <InputCheck isDetailed />
    </Wrapper>
  );
}
