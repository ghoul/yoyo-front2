// import { useRoutes } from "react-router-dom";
// import Themeroutes from "./routes/Router";

// const App = () => {
//   const routing = useRoutes(Themeroutes);

//   return <div className="dark">{routing}</div>;
// };

// export default App;

import { HashRouter as Router, useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";

const App = () => {
  const routing = useRoutes(Themeroutes);

  return (
    <div className="dark">
      <Router>
        {routing}
      </Router>
    </div>
  );
};

export default App;
