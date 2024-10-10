'use client';

import { useState } from 'react';

import Input from '@/components/atoms/Input';

export default function Home() {
  const [singleValue, setSingleValue] = useState<string>('');
  const [tagsValue, setTagsValue] = useState<string[]>([]);

  const handleSingleChange = (value: string | string[]) => {
    setSingleValue(value as string);
  };

  const handleTagsChange = (value: string | string[]) => {
    setTagsValue(value as string[]);
  };

  return (
    <div className="p-4">
      <div className="mb-6">
        <h2 className="font-bold">Input chỉ chứa chuỗi (string)</h2>
        <Input
          value={singleValue}
          onChange={handleSingleChange}
          placeholder="Nhập chuỗi vào đây"
          label="Chuỗi"
          helperText="Vui lòng nhập chuỗi vào đây"
        />
        <div className="mt-2">Giá trị hiện tại: {singleValue}</div>
      </div>

      <div>
        <h2 className="font-bold">Input chứa tags (string[])</h2>
        <Input
          value={tagsValue}
          onChange={handleTagsChange}
          placeholder="Nhập tags, ngăn cách bằng dấu phẩy"
          label="Tags"
          helperText="Nhập các tags và ngăn cách bằng dấu phẩy"
          isTags
        />
        <div className="mt-2">
          <h3>Các tags hiện tại:</h3>
          <ul>
            {tagsValue.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
