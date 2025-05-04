// inputTextAction.ts
import { Dispatch, SetStateAction } from 'react';

// 입력 변경 핸들러 함수
const handleInputChange =
  (setText: Dispatch<SetStateAction<string | undefined>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

export { handleInputChange };
