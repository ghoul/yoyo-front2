// import React from "react";
// import "./loader.scss";
// import { Spinner } from "reactstrap";

// const Loader = () => (
//   <div className="fallback-spinner">
//     <div className="loading">
//       <Spinner color="primary" />
//     </div>
//   </div>
// );
// export default Loader;

import React, { startTransition } from "react";
import "./loader.scss";
import { Spinner } from "reactstrap";

const Loader = () => {
  // Wrap the content that might suspend with startTransition
  return startTransition(
    <div className="fallback-spinner">
      <div className="loading">
        <Spinner color="primary" />
      </div>
    </div>
  );
};

export default Loader;

