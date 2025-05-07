'use client';

/**
 * Memo 컴포넌트
 * - 기존 메모 내용이 있으면 입력 필드에 표시
 * - 없으면 placeholder로 안내 문구 출력
 */

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { handleInputChange } from '@/actions/inputTextAction';

export default function Memo({ memo }: { memo: string | undefined | null }) {
  const [text, setText] = useState<string | undefined>('');
  const handleInput = handleInputChange(setText);

  useEffect(() => {
    setText(memo || '');
  }, [memo]);

  return (
    <MemoWrapper>
      <p className='mb-16 font-extrabold text-amber-800'>Memo</p>
      <textarea
        name='memo'
        id='memo'
        value={text}
        placeholder={memo ? '' : '메모를 작성할 수 있습니다.'}
        onChange={handleInput}
        className='w-full h-full text-center'
      />
    </MemoWrapper>
  );
}

const MemoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 311px;
  background: url('/assets/bg_memo.png') no-repeat;
  background-size: cover;
  border-radius: 24px;
  overflow: hidden;
  padding: 2.4rem 1.6rem;
  box-sizing: border-box;

  & > * {
    flex-shrink: 1;
  }
`;
