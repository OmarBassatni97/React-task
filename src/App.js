import { Route, Router } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";


function App() {
  return (
    <Router>
      <Route path='/' element={<Dashboard />} />
    </Router>
  );
}

export default App;
