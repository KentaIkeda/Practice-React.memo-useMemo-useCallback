'use client';

import React, { useCallback } from 'react';
import { useState, useMemo } from 'react';

const Child_1 = React.memo(() => {
  return <p>child 1</p>;
});
const Child_2 = React.memo((props: { handleClick: () => void }) => {
  return (
    <>
      <p>child 2</p>
      <button onClick={props.handleClick}>Click me</button>
    </>
  );
});

export default function Home() {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleClick = useCallback(() => {
    console.log('clicked');
  }, []);
  const double = (count: number) => {
    let i = 0;
    while (i < 30000000) {
      i++;
    }
    return count * 2;
  };
  const doubleCount = useMemo(() => double(count), [count]); // 重い処理

  return (
    <main>
      <h1>Practice useMemo</h1>
      <p>親コンポーネントです</p>
      <input
        type='text'
        onChange={handleChange}
        value={text}
        className='border-2 border-slate-200 rounded-md'
      />
      <Child_1 />
      <Child_2 handleClick={handleClick} />
      <p>親コンポーネントで重い計算処理</p>
      <p>
        Counter : {count}, {doubleCount}
      </p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </main>
  );
}
