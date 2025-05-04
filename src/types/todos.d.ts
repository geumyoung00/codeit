interface todoProps {
  isCompleted: boolean;
  name: string;
  id: number;
}

interface todoDetaileProps {
  isCompleted: boolean;
  imageUrl: string;
  memo: string;
  name: string;
  tenantId: string;
  id: number;
}

export { todoProps, todoDetaileProps };
