import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "./pages/List";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<List />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
