'use client';

import { useState } from 'react';

import Input from '@/components/atoms/Input';

export default function Home() {
  const [value, setValue] = useState<number>(0);
  const onChange = (value: any) => {
    setValue(value);
    console.log('24343', value);
  };

  return (
    <>
      <Input onChange={onChange} type="number" value={value} placeholder="nhập và nhấn enter" />
    </>
  );
}
