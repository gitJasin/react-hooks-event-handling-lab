// Code Keypad Component Here

function Keypad (){
    function handleChage() {
        console.log('Entering password...')
    }
    return (
        <div>
            <input onChange={handleChage} type="password" />
        </div>
    )
}

export default Keypad;

// [X] - 1. In the `components/Keypad.js` file, create a `Keypad` React component.
// [X] - 2. In that component, render an `input` with the right type.
// [X] - 3. On that `input`, add an event handler that listens for the `change` event.
// [X] - 4. When that event fires, use `console.log` to print out the text `'Entering password...'`.]