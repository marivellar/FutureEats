import { useState } from "react";

export const useInput = (initialValues) => {
  const [inputText, setInputText] = useState(initialValues);

  const onChange = (event) => {
    const { value, name } = event.target;
    setInputText({ ...inputText, [name]: value });
  };

  const clearInput = () => {
    setInputText(initialValues)
  }
  
  return { inputText, onChange, clearInput};
}; 