import './index.css';
import Employee from './Components/employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState();
  const showEmployees = true;
  return (
      <div className="App">
        {showEmployees ? (
          <>
            <input type='text' onChange={(e) => {
              setRole(e.target.value)
            }}
            />
            <Employee name="Lester" role={role}/>
          </>
        ) : (
        <p>You cannot see the employees.</p>
        )}
      </div>
  )
}

export default App;
