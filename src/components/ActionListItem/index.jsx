import React from 'react';
import { useComponentSlots } from 'use-componentslots';
import './styles.scss';

const ActionListItem = ({children}) => {
    const [Slot] = useComponentSlots(children);
    return (
    <li className='actionitem'>
        <span>
            <Slot name='actions'></Slot>
        </span>
        <h4><Slot name='title'>Unnamed Item</Slot></h4>
    </li>
    )
};

export default ActionListItem;