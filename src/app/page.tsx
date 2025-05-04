'use client';

import { Button } from '@/components/Buttons/Button';
import { InputCheck } from '@/components/Input/InputCheck';
import { InputText } from '@/components/Input/InputText';
import { Wrapper } from '@/components/Wrapper';

export default function Home() {
  return (
    <Wrapper>
      <InputText />
      <InputCheck id='test' label={'테스트'} />
      <InputCheck isDetailed id='detailTest' label={'테스트'} />
      <Button />
      <Button type='empty' />
      <Button type='delete' />
      <Button type='save' />
      <Button type='edit' />
    </Wrapper>
  );
}
