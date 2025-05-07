// url로 /todos 접근 시 홈으로

import { redirect } from 'next/navigation';

export default function Todos() {
  redirect('/');
}
