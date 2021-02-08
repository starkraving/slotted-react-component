import React, { useRef, useState } from 'react';
import ActionListItem from './components/ActionListItem';
import Modal from './components/Modal';
import startingTerms from './data/terms';

const App = () => {
  
  const [terms] = useState(startingTerms);
  const [modalChildren, setModalChildren] = useState([]);
  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.open();
  };

  const viewTerm = (idx) => () => {
    const term = terms[idx];
    setModalChildren([
      <span key='modal_title' slot='title'>{term.word}</span>,
      <p key='modal_term_type'><em>{term.type}</em></p>,
      <ol key='modal_term_defs'>{term.defs.map((def, idx) => (<li key={`def_${idx}`}>{def}</li>))}</ol>,
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
            </ActionListItem>
          ))
        }
      </ul>

      <Modal ref={modalRef}>{modalChildren}</Modal>
    </div>
  )
};

export default App;
