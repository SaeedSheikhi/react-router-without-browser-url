import React from "react";

function Terms(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.history.goBack();
        }}
      />
      terms
    </div>
  );
}

export default Terms;
