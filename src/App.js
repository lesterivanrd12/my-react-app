import './index.css';
import Employee from './Components/employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [role, setRole] = useState();
  const [employees, setEmployees] = useState([
      {
        name: "Lester Ivan Dalaguit",
        role: "Software Engineer",
        img: "https://images.pexels.com/photos/2102413/pexels-photo-2102413.jpeg?"
      },
      {
        name: "Sarah Lahbati",
        role: "Product Manager",
        img: "https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg?"
      },
      {
        name: "John Doe",
        role: "Designer",
        img: "https://images.pexels.com/photos/3201580/pexels-photo-3201580.jpeg?"
      },
      {
        name: "Lander Ace Dalaguit",
        role: "Graphic Designer",
        img: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?"
      },
      {
        name: "Enting Kabesote",
        role: "Marketing Manager",
        img: "https://images.pexels.com/photos/7110/desk-office-workspace-coworking.jpg?"
      },
      {
        name: "Kardo Dalisay",
        role: "The Immortal",
        img: "https://images.pexels.com/photos/6972/summer-office-student-work.jpg?"
      },
    ]);

  const showEmployees = true;
  
  return (
      <div className="App">
        {showEmployees ? (
          <>
            <div className='flex flex-wrap justify-center'>
              {employees.map((employee)=> {
                return (
                  <Employee
                    key={uuidv4()}
                    name={employee.name}
                    role={employee.role}
                    img={employee.img}
                  />
                )
              })}
            </div>
          </>
        ) : (
        <p>You cannot see the employees.</p>
        )}
      </div>
  )
}

export default App;
