// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';
import Home from './pages/Home/Home';
import Voters from './pages/Voters/Voters';
import Time from './pages/Time';
export function App() {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Voters />} path="/voters" />
        <Route element={<Time />} path="/time" />
      </Routes>
    </div>
  );
}

export default App;
