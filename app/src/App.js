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
import CssBaseline from '@mui/material/CssBaseline';
import TopNavBar from './TopNavBar';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <TopNavBar />
      <div>
        <h1>Hello</h1>

        <BrowserRouter>
// https://mui.com/material-ui/guides/routing/#link
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
    </React.Fragment>
  );
}

export default App;