import React from 'react';
import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from "react-router-dom";
import Api from "./Api"
import BrowserNotifications from './BrowserNotifications';
import Home from './Home';


function App() {
  return (

    <div>
      <h1>Hello</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/funccall">API</Link></li>
            <li><Link to="/browsernotifications">Notifications</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/funccall" element={<Api />} />
          <Route path="/browsernotifications" element={<BrowserNotifications />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;