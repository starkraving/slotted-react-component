import React, { forwardRef, useImperativeHandle, useState } from 'react';
import useSlots from '../../hooks/useSlots';
import Dialog from './Dialog';
import Overlay from './Overlay';

const Modal = ({children}, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(false);
    const cancelClose = (e) => {
        e.stopPropagation();
    };

    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close: closeModal
    }));

    const [Slot, hasSlot] = useSlots(children);


    if (!isOpen) {
        return null;
    }
    return (
        <Overlay isOpen={isOpen} onClick={closeModal}>
            <Dialog onClick={cancelClose}>
                <header>
                    <h2><Slot name='title'>Word Dictionary Definition</Slot></h2>
                    <button onClick={closeModal}>&times;</button>
                </header>
                <main>
                    <Slot></Slot>
                </main>
                {
                    hasSlot('buttons') && <footer>
                        <Slot name='buttons'></Slot>
                    </footer>
                }
            </Dialog>
        </Overlay>
    );
};

export default forwardRef(Modal);