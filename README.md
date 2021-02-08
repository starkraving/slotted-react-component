## useComponentSlots Modal Example App

This is an example application showing the usage of `useComponentSlots`.

`useComponentSlots` is a custom React Hook that provides Web Component-style syntax for slots instead of passing 
JSX into props. In our example Modal you would typically pass slots via named props:

```
<Modal
    title={<span>Modal Title</span>} 
    buttons={<button onClick={closeModal}>Close</button>}
>
    <p>Modal Content</p>
</Modal>
```

With our custom hook it now looks like this:

```
<Modal>
    <span slot='title'>Modal Title</span>
    <p>Modal Content</p>
    <button slot='buttons' onClick={closeModal}>Close</button>
</Modal>
```

Our corresponding `Modal` component would look something like this:

```
const Modal = ({children}) => {
    const [Slot, hasSlot] = useComponentSlots(children);

    return (
        <Overlay>
            <Dialog>
                <heading>
                    <h3><Slot name='title'>Default Modal Title</Slot></h3>
                    <button onClick={closeModal}>&times;</button>
                </heading>
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
```

This example shows some of the features of the Hook, including default content for slots and conditional checks for populated slots.

You can view this modal example in action by going to: https://starkraving.github.io/slotted-react-compoent/