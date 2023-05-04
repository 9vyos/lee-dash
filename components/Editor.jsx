'use client'

import EditorJS from '@editorjs/editorjs';
import {useState,useEffect, forwardRef, useImperativeHandle } from 'react';

const Editor = forwardRef((props, ref) => {
  const [editor, setEditor] = useState(null);
  useEffect(() => {
    const instance = new EditorJS({
      // editor.js options
      holder: props.id,
      data: props.value,
    });

    setEditor(instance);

  
  }, [props.id, props.value]);

    const updateValue = async () => {
      console.log("123")
      const savedData = await editor.save();
      props.onChange(savedData);
    };

  function handleChildFunction() {
    console.log("하위 컴포넌트의 함수가 실행되었습니다.");
  }

  useImperativeHandle(ref, () => ({
    updateValue
  }));

  return <div id={props.id}></div>;
  Editor.displayName = ref
});




export default Editor;

