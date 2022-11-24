import './index.css';
import Header from './Components/Header';
import Employees from './Pages/Employees';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Customers from './Pages/Customers';
import Dictionary from './Pages/Dictionary';
import Definition from './Pages/Definition';
import NotFound from './Components/NotFound';
import Calendar from './Pages/Calendar';

function App() {
  return (
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path='/employees' element={<Employees />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/dictionary' element={<Dictionary />} />
            <Route path='/dictionary/:search' element={<Definition />} />
            <Route path='/calendar' element={<Calendar /> } />
            <Route path='/404' element={<NotFound />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Header>
      </BrowserRouter>
  );
}

export default App;
