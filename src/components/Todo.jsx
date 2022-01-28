import React,{useState} from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';


const Todo = ({ title: text }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function deleteHandler() {
        // alert(`Delete ${text}`);
        //  console.log('delete');
        setModalIsOpen(true);
    }
    function closeModalHandler() {
        setModalIsOpen(false);
    }
    return (
        <div className="card"> 
            <h2>{text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>DELETE</button>
            </div>
            {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler }/> }
            {modalIsOpen && <Backdrop onClose={closeModalHandler}/> }
        </div>
  ) ;
};

export default Todo;

