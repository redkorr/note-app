import { Route, BrowserRouter as Router, Routes } from 'react-router';
import './App.css';
import { ROUTES } from './routes';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {ROUTES.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
