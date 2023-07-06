// PAGES
import Homepage from './Pages/Homepage'

//CONTEXT
import CurrentUserProvider from './contexts/CurrentUser'

// COMPONENT ROUTES?
import Login from './Components/Login';
import Register from './Components/Register';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <main>
      <CurrentUserProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Homepage />}
            />
            <Route
                path="/authentication"
                element={<Login />}
            /> 
            <Route
                path="/user/register"
                element={<Register />}
            />
          </Routes>
        </Router>
      </CurrentUserProvider>
    </main>
  )
}

export default App;
