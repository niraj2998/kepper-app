import React from "react";
import UseAnimations from "react-useanimations";
import trash from "react-useanimations/lib/trash";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <UseAnimations animation={trash} />
      </button>
    </div>
  );
}

export default Note;
