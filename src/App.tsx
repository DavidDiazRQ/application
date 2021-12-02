import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
import { Home } from './views/Home';
import { About } from './views/About';
import { NavBar } from './components/NavBar';
function App() {
  return (
    <>
      <Header title="React App " />

      <Router>
        <div>
          <NavBar />
           <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/">
              {/* <Redirect to="/Home" /> */}
            </Route>
            <Route path="/About" element={<About />} />
           </Routes>
        </div>
      </Router>

    </>
  );
}
export default App;