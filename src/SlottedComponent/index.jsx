import React from 'react';

class SlottedComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slots: React.Children.toArray(this.props.children).reduce(this.collectedSlots, {general: []})
        };
    }

    collectedSlots = (collector, child) => {
        const slotName = child.props.slot || 'general';
        if (!collector.hasOwnProperty(slotName)) {
            collector[slotName] = [];
        }
        collector[slotName].push(child);
        return collector;
    };

    Slot = ({name, children: defaultChildren}) => {
        const children = !name
            ? this.state.slots.general
            : (this.state.slots.hasOwnProperty(name) ? this.state.slots[name] : defaultChildren);
        return (<>{children}</>);
    };
}

export default SlottedComponent;