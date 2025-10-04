// Step 1: Define your event handler functions
function handleButtonClick(event) {
  console.log("Hello!");
  console.log(event);
}

function handleParagraphClick() {
  console.log("Paragraph was clicked!");
}

function handleMouseOver() {
  console.log("Mouse moved over the button!");
}

// Step 2: Use these handlers inside your component
export default function Button() {
  return (
    <div>
      {/* onClick fires when you click the button */}
      <button onClick={handleButtonClick}>Click me!</button>

      {/* onMouseOver fires when you hover over the button */}
      <button onMouseOver={handleMouseOver}><p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, natus ea qui sed perspiciatis possimus error, tempora, odit perferendis dolorem voluptatibus dolores ab accusamus ullam unde vero assumenda commodi nisi!</p></button>

      {/* onClick fires when you click on the paragraph */}
      {/* <p onClick={handleParagraphClick}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Click on this paragraph to trigger an event!
      </p> */}
    </div>
  );
}
