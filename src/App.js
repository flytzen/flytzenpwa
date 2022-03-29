import React from 'react';
import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from "react-router-dom";
import Api from "./Api"
import Notification from './Notification';
import Home from './Home';


function App() {
  return (

    <div>
      <h1>Hello</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/api">API</Link></li>
            <li><Link to="/notifications">Notifications</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/api" element={<Api />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;