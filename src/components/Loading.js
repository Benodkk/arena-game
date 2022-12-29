import React from "react";

import BeatLoader from "react-spinners/BeatLoader";

function Loading() {
  return (
    <div className="loading">
      <BeatLoader color="white" />
    </div>
  );
}

export default Loading;
