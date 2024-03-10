import { createPortal } from "react-dom"
import { useRef, useEffect } from "react";

export default function Modal({ children, open }) {
  useRef();
  
  useEffect(() => {
    if (open) {

    }
  }, [open]);

  return createPortal(
    <dialog>{children}</dialog>,
    document.getElementById('modal'));
}