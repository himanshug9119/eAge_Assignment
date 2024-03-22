
import Header from './components/header'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import assignment1 from "./pages/assignment1";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/assignment1" component={assignment1} />
        </Routes>
      </Router>
    </>
  );
}

export default App
