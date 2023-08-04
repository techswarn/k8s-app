import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Weather from "./Components/Weather";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Weather />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
