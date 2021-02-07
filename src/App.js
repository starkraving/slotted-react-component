import React, { useRef, useState } from 'react';
import ActionListItem from './components/ActionListItem';
import Modal from './components/Modal';

const App = () => {
  const startingTerms = [
    {
      word: 'carburation',
      type: 'noun',
      defs: [
        'the process of mixing a hydrocarbon fuel with a correct amount of air to make an explosive mixture for an internal-combustion engine'
      ]
    },
    {
      word: 'thruster',
      type: 'noun',
      defs: [
        'a person or thing that thrusts.',
        'Fox Hunting: a rider who keeps in the front of the field.',
        'Aerospace: a small rocket attached to a spacecraft and used to control its attitude or translational motion.'
      ]
    },
    {
      word: 'mobilize',
      type: 'verb',
      defs: [
        'to assemble or marshal (armed forces, military reserves, or civilian persons of military age) into readiness for active service.',
        'to organize or adapt (industries, transportation facilities, etc.) for service to the government in time of war.',
        'to marshal, bring together, prepare (power, force, wealth, etc.) for action, especially of a vigorous nature: "to mobilize one\'s energy".',
        'to increase or bring to a full stage of development: "to mobilize one\'s anger".',
        'to be or become assembled, organized, etc., as for war: "to mobilize for action".'
      ]
    },
    {
      word: 'hokku',
      type: 'noun (plural)',
      defs: [
        'the opening verse of a linked verse series.',
        'haiku'
      ]
    },
    {
      word: 'bisulphate',
      type: 'noun',
      defs: [
        'a salt or ester of sulphuric acid containing the monovalent group -HSO 4 or the ion HSO 4 –',
        '(modifier) consisting of, containing, or concerned with the group -HSO 4 or the ion HSO 4 –bisulphate ion'
      ]
    }
  ]
  const [terms] = useState(startingTerms);
  const [modalChildren, setModalChildren] = useState([]);
  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.open();
  };

  const viewTerm = (idx) => () => {
    const term = terms[idx];
    setModalChildren([
      <span slot='title'>{term.word}</span>,
      <p><em>{term.type}</em></p>,
      <ol>{term.defs.map((def, idx) => (<li key={`def_${idx}`}>{def}</li>))}</ol>
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
