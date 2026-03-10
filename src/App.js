    

function App() {

  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  // Fetch employees
  const getEmployees = () => {
    axios.get("http://localhost:8080/employees")
      .then(response => {
        setEmployees(response.data);
      });
  };

  useEffect(() => {
    getEmployees();
  }, []);

  // Add employee
  const addEmployee = () => {
    axios.post("http://localhost:8080/employees", {
      name: name,
      email: email,
      department: department
    }).then(() => {
      getEmployees();
      setName("");
      setEmail("");
      setDepartment("");
    });
  };

  // Delete employee
  const deleteEmployee = (id) => {
    axios.delete(`http://localhost:8080/employees/${id}`)
      .then(() => getEmployees());
  };

 
}

export default App;