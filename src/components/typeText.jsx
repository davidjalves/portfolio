/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";

export const TypeText = ({ text,setIsEnded,style }) => {
  const index = useRef(0);
  const [end, setEnd] = useState(false);
  const [currentText, setCurrentText] = useState("");
  useEffect(() => {
    index.current = 0;
    setCurrentText("");
  }, [text]);
  useEffect(() => {
    if (end === true) {
      setIsEnded((prev) => prev + 1);
    }
  }, [end]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      var newText = currentText + text.charAt(index.current);
      setCurrentText(newText);
      index.current += 1;
      if (currentText.length === text.length) {
        setEnd(true);
      }
    }, 100);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentText, text]);

  return <div style={style}>{currentText}</div>;
};
