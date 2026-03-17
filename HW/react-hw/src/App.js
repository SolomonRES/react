import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path = "/" element = {<Layout />} />
          <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
