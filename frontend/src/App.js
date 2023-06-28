// PAGES
import Homepage from './Pages/Homepage'
import User from './Pages/User'

// COMPONENT ROUTES?
import Login from './Components/Login';
import Register from './Components/Register';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route 
            path="/user" 
            element={<User />} 
          />
          <Route
            path="/"
            element={<Homepage />}
          />
          <Route
              path="/user/login"
              element={<Login />}
          /> 
          <Route
              path="/user/register"
              element={<Register />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
