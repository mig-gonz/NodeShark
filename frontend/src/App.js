// PAGES
import Homepage from "./Pages/Homepage";

//CONTEXT
import CurrentUserProvider from "./contexts/CurrentUser";

// COMPONENT ROUTES?
import Login from "./components/Login";
import Register from "./components/Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <CurrentUserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/register" element={<Register />} />
          </Routes>
        </Router>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
