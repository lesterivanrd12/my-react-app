import './index.css';
import Header from './Components/Header';
import Employees from './Pages/Employees';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Customers from './Pages/Customers';

function App() {
  

  return (
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path='/employees' element={<Employees />} />
            <Route path='/customers' element={<Customers />} />
          </Routes>
        </Header>
      </BrowserRouter>
  );
}

export default App;
