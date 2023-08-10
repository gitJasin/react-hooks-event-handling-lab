
function EyesOnMe() {
    function handleFocus() {
        console.log('Good!')
    }

    function handleBlur() {
        console.log('Hey! Eyes on me!')
    }
    return (
        <div>
            <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe

// [X] - 1. In the `components/EyesOnMe.js` file, create a `EyesOnMe` React component.
// [X] - 2. In that component, render a `button` with the text `'Eyes on me'`.
// [] - 3. On that `button`, add event handlers that listen for the `focus` and `blur` events.
// [] - 4. When the `focus` event fires, use `console.log` to print out the text `'Good!'`.
// [] - 5. When the `blur` event fires, use `console.log` to print out the text `'Hey! Eyes on me!'`.