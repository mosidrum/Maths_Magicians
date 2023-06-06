import { Route, Routes } from 'react-router-dom';
import Calculator from './components/pages/Calculator';
import Home from './components/pages/Home';
import Quote from './components/pages/Quote';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculate" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
