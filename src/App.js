import './index.css';
import Employee from './Components/employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [role, setRole] = useState();
  const [employees, setEmployees] = useState([
      {
        id: 1,
        name: "Lester Ivan Dalaguit",
        role: "Software Engineer",
        img: "https://images.pexels.com/photos/2102413/pexels-photo-2102413.jpeg?"
      },
      {
        id: 2,
        name: "Sarah Lahbati",
        role: "Product Manager",
        img: "https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg?"
      },
      {
        id: 3,
        name: "John Doe",
        role: "Designer",
        img: "https://images.pexels.com/photos/3201580/pexels-photo-3201580.jpeg?"
      },
      {
        id: 4,
        name: "Lander Ace Dalaguit",
        role: "Graphic Designer",
        img: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?"
      },
      {
        id: 5,
        name: "Enting Kabesote",
        role: "Marketing Manager",
        img: "https://images.pexels.com/photos/7110/desk-office-workspace-coworking.jpg?"
      },
      {
        id: 6,
        name: "Kardo Dalisay",
        role: "The Immortal",
        img: "https://images.pexels.com/photos/6972/summer-office-student-work.jpg?"
      },
    ]);


  function updateEmployee(id, newName, newRole) {
    const updatedEmployee = employees.map((employee) => {
      if (id == employee.id) {
        return {...employee, name: newName, role: newRole};
      }

      return employee;
    });

    setEmployees(updatedEmployee);
  }

  const showEmployees = true;
  
  return (
      <div className="App">
        {showEmployees ? (
          <>
            <div className='flex flex-wrap justify-center'>
              {employees.map((employee)=> {
                return (
                  <Employee
                    key={employee.id}
                    id={employee.id}
                    name={employee.name}
                    role={employee.role}
                    img={employee.img}
                    updateEmployee={updateEmployee}
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
