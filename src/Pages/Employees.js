import '../index.css';
import Employee from '../Components/employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from '../Components/addEmployee';

function Employees() {
  // const [role, setRole] = useState();
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Front-end Developer",
      img: "https://images.pexels.com/photos/2102413/pexels-photo-2102413.jpeg?"
    },
    {
      id: 2,
      name: "Alicia Doe",
      role: "Product Manager",
      img: "https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg?"
    },
    {
      id: 3,
      name: "Joel Doe",
      role: "UI/UX Designer",
      img: "https://images.pexels.com/photos/3201580/pexels-photo-3201580.jpeg?"
    },
    {
      id: 4,
      name: "James Doe",
      role: "Graphic Designer",
      img: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?"
    },
    {
      id: 5,
      name: "Andrew Doe",
      role: "Marketing Manager",
      img: "https://images.pexels.com/photos/7110/desk-office-workspace-coworking.jpg?"
    },
    {
      id: 6,
      name: "Peter Doe",
      role: "iOS Developer",
      img: "https://images.pexels.com/photos/6972/summer-office-student-work.jpg?"
    },
  ]);

  // Function for updating employee data
  function updateEmployee(id, newName, newRole) {
    const updatedEmployee = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
      }

      return employee;
    });

    setEmployees(updatedEmployee);
  }

  // Function for adding new employee data
  function newEmployee(name, role, img) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img
    }

    setEmployees([...employees, newEmployee])
  }

  const showEmployees = true;

  return (
    <div className="App">
      {showEmployees ? (
        <>
          <div className='flex flex-wrap justify-center'>
            {employees.map((employee) => {
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
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>You cannot see the employees.</p>
      )}
    </div>
  );
}

export default Employees;
