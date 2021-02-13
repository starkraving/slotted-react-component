import React from 'react';

const useComponentSlots = (componentChildren) => {
  const slots = React.Children.toArray(componentChildren).reduce(
      (collector, child) => {
          const slotName = child.props.slot || 'general';
          if (!collector.hasOwnProperty(slotName)) {
              collector[slotName] = [];
          }
          collector[slotName].push(child);
          return collector;
      },
      {general: []}
  );
  return [
      ({name, children: defaultChildren}) => {
          const children = !name
              ? slots.general
              : (slots.hasOwnProperty(name) ? slots[name] : defaultChildren);
          return React.createElement(React.Fragment, [], children);
      },
      (slot) => slots.hasOwnProperty(slot) && slots[slot].length,
  ]
};

export default useComponentSlots;