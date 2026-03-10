import { useNavigate, useParams } from "react-router-dom";
import "./updateuser.css"

import { useEffect, useState } from "react";



const UpdateUser = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [formdata, setformdata] = useState({

        name: "",
        email: "",
        department: ""
    });





    const handleChange = (e) => {
        const { name, value } = e.target;
        setformdata({ ...formdata, [name]: value });
    };


    const fetchemployee = async () => {

        try {

            const response = await fetch(`http://localhost:8080/api/employee/${id}`);

            const data = await response.json();

            setformdata(data)

        } catch (error) {

            console.log(error.message);
        }
    }



    useEffect(() => {

        fetchemployee();
    }, [id])


    const handlesubmit = async (e) => {

        e.preventDefault();

        try {

            const response = fetch(`http://localhost:8080/api/employee/${id}`, {

                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                     
                     body: JSON.stringify(formdata),
            });

            const data = (await response).json();

            console.log("user updated", data);

            navigate("/")

        } catch (error) {
            console.error("error updating  user", error.message);
        }
    }


    return (

        <>
            <div className="postuser-wrapper1">
                <div className="container1">





                    <form onSubmit={handlesubmit} >
                        <div className="header-wrap1">

                            <h2 className="header-2">Edit New Employee</h2>

                        </div>

                        <input type="text" value={formdata.name} name="name" placeholder="Enter Name" onChange={handleChange} />
                        <input type="email" value={formdata.email} name="email" placeholder="Enter Email" onChange={handleChange} />
                        <input type="text" value={formdata.department} name="department" placeholder="Enter Department" onChange={handleChange} />

                        <button className="btn1" type="submit">Edit Employee</button>
                    </form>
                </div>

            </div>

        </>
    )
}


export default UpdateUser