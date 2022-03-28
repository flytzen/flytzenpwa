import React, { useState, useEffect } from 'react';

export default function Api() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
      console.log(text);
    })();
  });

  return (
    <div>
      <h1>Hello</h1>
      <div>{data}</div>
    </div>
  );
}
