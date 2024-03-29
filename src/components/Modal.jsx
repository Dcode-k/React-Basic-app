import React from 'react';

const Modal = (props) => {
    function cancelHandler() {
        props.onCancel();
    }
    function confirmHandler() {
        props.onConfirm();
    }
    return (<div className='modal'>
        <p>Are You Sure?</p>
        <button className='btn btn--alt' onClick={cancelHandler}>
            Cancel
        </button>
        <button className='btn' onClick={confirmHandler}>Confirm</button>
  </div>);
};

export default Modal;
