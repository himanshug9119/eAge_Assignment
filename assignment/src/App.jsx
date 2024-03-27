import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Assignment1 from "./pages/assignment1";
import Assignment2 from "./pages/assignment2";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "font-awesome/css/font-awesome.min.css";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assignment1" element={<Assignment1 />} />
          <Route path="/assignment2" element={<Assignment2 />} />
          {/* <Route path="/assignment3" element={<Assignment2 />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
