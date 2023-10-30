import { Home } from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import { Navbar } from "./pages/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./component/Footer";
import Contact from "./pages/contact";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/dashboard";
import Readmore from "./pages/readmore";
import Viewblog from "./pages/Viewblog";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<Aboutus />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/readmore/:_id" element={<Readmore />} />
            <Route path="/Viewblog" element={<Viewblog />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
