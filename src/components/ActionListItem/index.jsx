import React from 'react';
import useSlots from '../../hooks/useSlots';
import './styles.scss';

const ActionListItem = ({children}) => {
    const [Slot] = useSlots(children);
    return (
    <li className='actionitem'>
        <span>
            <Slot name='actions'></Slot>
        </span>
        <h4><Slot name='title'></Slot></h4>
    </li>
    )
};

export default ActionListItem;