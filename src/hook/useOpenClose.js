import { useState } from 'react';

export const useOpenClose = (initialState = false) => {
  
  const [isOpen, setIsOpen] = useState(initialState);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen(prevState => !prevState);
  };

  return { isOpen, open, close, toggle };
};
