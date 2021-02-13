# useComponentSlots - Web Component-style slots for React Components

### This software was designed to save you development time and money
Did it help? Consider donating some of your savings towards further enhancements to the software!

[![patreon](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/bePatron?u=26073031)

When searching for "React component slots" often you find articles that show something like this for syntax:

```
<MyComponent
  title={<h1>My Component Title</h1>}
  description={<p>Some descriptive text</p>}
>
  <p>General content inside the module</p>
</MyComponent>
```

In vanilla Javascript web components, however, the syntax is (to me) quite a bit more readable:

```
<MyComponent>
  <h1 slot="title">My Component Title</h1>
  <p slot="description">Some descriptive text</p>
  <p>General content inside the module</p>
</MyComponent>
```

The `useComponentSlots` hook brings support for this style of syntax into your React components, making it extremely easy to not only
set up a component that takes content in multiple locations in the template, but also to implement that component in your codebase.

## How to use
Add the package to your React app:

```
npm install use-componentslots
```

Add the hook to whatever component is going to use it:

```
import useComponentSlots from 'use-componentslots';
```

Then, use the hook in your component to create a <Slot> component in your render function that will render your main component's children in named locations within the component template.

```
const MyDialog = ({children}) => {
  const [Slot] = useComponentSlots(children);

  return (
    <dialog>
      <header>
        <Slot name='title'>Default Dialog Title</Slot>
      </header>
      <main>
        <Slot></Slot>
      </main>
    </dialog>
  )
};

export default MyDialog;
```

As you can see from the above example:

* You can define default content in a named Slot which will be rendered if the slot is not used
* The default location doesn't require a name attribute

Now, in any Component that uses this slotted Component, you can put all the JSX into the main children instead of having to use named props:

```
<MyDialog>
  <span slot='title'>This text will be shown instead of "Default Dialog Title"</span>
  <p>
    Any children without a "slot" prop will automatically get collected into the default location
  </p>
  <p>
    You can even have multiple children, and they'll all get collected into the proper Slot for rendering
  </p>
</MyDialog>
```

## Advanced Example

### Conditional Rendering

`useComponentSlots` includes a function you can use to test the existence of a named slot, which allows for conditional rendering:

```
const MyDialog = ({children}) => {
  const [Slot, hasSlot] = useComponentSlots(children);

  return (
    <dialog>
      <heading>
        <Slot name='title'>Default Dialog Title</Slot>
      </heading>
      <main>
        <Slot></Slot>
      </main>
      {
        // the footer won't render unless there's at least one child with a slot prop of 'buttons'
        hasSlot('buttons') && <footer>
          <Slot name='buttons'></Slot>
        </footer>
      }
    </dialog>
  )
};

export default MyDialog;
```

You can see a demo online at https://starkraving.github.io/slotted-react-component/