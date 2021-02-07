import React, { forwardRef, useImperativeHandle, useState } from 'react';
import useSlots from '../../hooks/useSlots';
import Dialog from './Dialog';
import Overlay from './Overlay';

const Modal = ({children}, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(false);

    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close: closeModal
    }));

    const [Slot] = useSlots(children);


    if (!isOpen) {
        return null;
    }
    return (
        <Overlay isOpen={isOpen} onClick={closeModal}>
            <Dialog>
                <header>
                    <h2><Slot name='title'>Dialog Title</Slot></h2>
                    <button onClick={closeModal}>&times;</button>
                </header>
                <main>
                    <Slot></Slot>
                </main>
            </Dialog>
        </Overlay>
    );
};

export default forwardRef(Modal);