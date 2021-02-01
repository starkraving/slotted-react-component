import React from 'react';

class SlottedComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slots: React.Children.toArray(this.props.children).reduce((coll, child) => {
                const slotName = child.props.slot || 'general';
                if (!coll.hasOwnProperty(slotName)) {
                    coll[slotName] = [];
                }
                coll[slotName].push(child);
                return coll;
            }, {general: []})
        };
    }

    Slot = ({name}) => {
        const children = !name ? this.state.slots.general : (this.state.slots.hasOwnProperty(name) ? this.state.slots[name] : []);
        return (<>{children}</>);
    };
}

export default SlottedComponent;