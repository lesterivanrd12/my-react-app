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
            <div className='flex flex-wrap justify-center'>
              <Employee
                name="Lester Ivan Dalaguit"
                role="Software Engineer"
                img="https://images.pexels.com/photos/2102413/pexels-photo-2102413.jpeg?cs=srgb&dl=pexels-djordje-petrovic-2102413.jpg&fm=jpg"
              />
              <Employee
                name="Sarah Labati"
                role="Product Manager"
                img="https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg?cs=srgb&dl=pexels-christina-morillo-1181672.jpg&fm=jpg"
              />
              <Employee
                name="John Doe"
                role="Intern"
                img="https://images.pexels.com/photos/3201580/pexels-photo-3201580.jpeg?cs=srgb&dl=pexels-cottonbro-3201580.jpg&fm=jpg"
              />
              <Employee
                name="Lester Ivan Dalaguit"
                role="Software Engineer"
                img="https://images.pexels.com/photos/2102413/pexels-photo-2102413.jpeg?cs=srgb&dl=pexels-djordje-petrovic-2102413.jpg&fm=jpg"
              />
              <Employee
                name="Sarah Labati"
                role="Product Manager"
                img="https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg?cs=srgb&dl=pexels-christina-morillo-1181672.jpg&fm=jpg"
              />
              <Employee
                name="John Doe"
                role="Intern"
                img="https://images.pexels.com/photos/3201580/pexels-photo-3201580.jpeg?cs=srgb&dl=pexels-cottonbro-3201580.jpg&fm=jpg"
              />
              <Employee
                name="Lester Ivan Dalaguit"
                role="Software Engineer"
                img="https://images.pexels.com/photos/2102413/pexels-photo-2102413.jpeg?cs=srgb&dl=pexels-djordje-petrovic-2102413.jpg&fm=jpg"
              />
              <Employee
                name="Sarah Labati"
                role="Product Manager"
                img="https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg?cs=srgb&dl=pexels-christina-morillo-1181672.jpg&fm=jpg"
              />
              <Employee
                name="John Doe"
                role="Intern"
                img="https://images.pexels.com/photos/3201580/pexels-photo-3201580.jpeg?cs=srgb&dl=pexels-cottonbro-3201580.jpg&fm=jpg"
              />
              <Employee
                name="Lester Ivan Dalaguit"
                role="Software Engineer"
                img="https://images.pexels.com/photos/2102413/pexels-photo-2102413.jpeg?cs=srgb&dl=pexels-djordje-petrovic-2102413.jpg&fm=jpg"
              />
            </div>
          </>
        ) : (
        <p>You cannot see the employees.</p>
        )}
      </div>
  )
}

export default App;
