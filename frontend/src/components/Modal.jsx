import React from 'react';

export default function Modal({ children, onClose }) {
  return (
    <>
      <div className='backdrop' onClick={onClose} aria-hidden="true"></div>

      <dialog
        className='modal'
        open
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        
        {children}
      </dialog>
    </>
  );
}
