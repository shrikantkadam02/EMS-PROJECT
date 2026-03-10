import { useEffect, useState } from "react";

import "./dashbord.css"
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const [employees, setemployees] = useState([]);

    const navigate = useNavigate();


    useEffect(() => {

        fetchemployees();

    }, [])


    const fetchemployees = async () => {

        try {

            const response = await fetch("http://localhost:8080/api/employees");

            const data = await response.json();

            setemployees(data);

        } catch (error) {

            console.error("error fetching employees", error.message);
        }
    }


const handledelete = async (employeeid) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/employee/${employeeid}`,
      {
        method: "DELETE",
      }

    );

    
       if(response.ok){
               
         setemployees((prevemployee) => 
             prevemployee.filter((employee) => employee.id !== employeeid)
        )}

    console.log(`Employee with id ${employeeid} deleted successfully.`);
  } catch (error) {
    console.log(error.message);
  }
};


const handleupdate = (employeeid) => {

     navigate(`/employee/${employeeid}`);
             
}

    return (

        <div className="container">


            <table className="employee-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.department}</td>
                            <td>
                                <div className="action-buttons">
                                    <button type="submit" className="update-btn" onClick={()=> handleupdate(employee.id)} >Update</button>
                                    <button  type="submit" className="delete-btn" onClick={() => handledelete(employee.id)}>Delete</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default Dashboard;