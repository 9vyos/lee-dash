'use client'
import React, { useState,useRef,useEffect } from 'react';
import Editor from '@/components/Editor';

const App = () => {
  const [values, setValues] = useState({
    editor1: null,
    editor2: null,
    editor3: null,
  });
  const editor1 = useRef(null);
  const editor2 = useRef(null);
  const editor3 = useRef(null);
  
  const handleSave = () => {
    editor1.current.updateValue();
    editor2.current.updateValue();
    editor3.current.updateValue();
  };

  const handleChange = (id, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  return (
    <div>
      1<Editor ref={ editor1} id="editor1" value={values.editor1} onChange={(value) => handleChange('editor1', value)} />
      2<Editor ref={ editor2}id="editor2" value={values.editor2} onChange={(value) => handleChange('editor2', value)} />
      3<Editor ref={ editor3}id="editor3" value={values.editor3} onChange={(value) => handleChange('editor3', value)} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default App;

