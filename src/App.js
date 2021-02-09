import React, { useRef, useState } from 'react';
import ActionListItem from './components/ActionListItem';
import Modal from './components/Modal';
import startingTerms from './data/terms';

const App = () => {
  
  const [terms, setTerms] = useState(startingTerms);
  const [modalChildren, setModalChildren] = useState([]);
  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.open();
  };

  const closeModal = () => {
    modalRef.current.close();
  }

  const deleteTerm = (idx) => {
    setTerms(terms.filter((_, i) => i !== idx));
    closeModal();
  };

  const resetTerms = () => {
    setTerms(startingTerms);
  }

  const viewTerm = (idx) => () => {
    const term = terms[idx];
    setModalChildren([
      <span key='modal_title' slot='title'>{term.word}</span>,
      <p key='modal_term_type'><em>{term.type}</em></p>,
      <ol key='modal_term_defs'>{term.defs.map((def, idx) => (<li key={`def_${idx}`}>{def}</li>))}</ol>,
    ]);
    openModal();
  };

  const confirmDeleteTerm = (idx) => () => {
    const confirm = () => {
      deleteTerm(idx);
    }
    setModalChildren([
      <span key='confirm_title' slot='title'>Confirm Delete</span>,
      <p key='confirm_body'>Are you sure you want to delete this term?</p>,
      <button key='confirm_cancel' slot='buttons' onClick={closeModal}>Cancel</button>,
      <button key='confirm_okay' slot='buttons' onClick={confirm}>Delete</button>
    ]);
    openModal();
  };

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Modal Demo using Web Component-like "Slots"</h1>
      <ul style={{margin: '0 auto', maxWidth: '900px'}}>
        {
          terms.map((word, idx) => (
            <ActionListItem key={idx}>
              <span slot='title'>{word.word}</span>
              <button slot='actions' onClick={viewTerm(idx)}>View</button>
              <button slot='actions' onClick={confirmDeleteTerm(idx)}>Delete</button>
            </ActionListItem>
          ))
        }
      </ul>

      {
        !terms.length && <div style={{textAlign: 'center'}}>
          <button onClick={resetTerms}>Reset</button>
        </div>
      }

      <Modal ref={modalRef}>{modalChildren}</Modal>
    </div>
  )
};

export default App;
