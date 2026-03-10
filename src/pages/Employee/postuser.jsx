import { useState } from "react"
import "./postuser.css"

import { useNavigate } from "react-router-dom"

const PostUser = () => {

    const [formdata, setformdata] = useState({

        name: "",
        email: "",
        department: ""
    });





    const handleChange = (e) => {
        const { name, value } = e.target;
        setformdata({ ...formdata, [name]: value });
    };

    const navigate = useNavigate();

    const handlesubmit = async (e) => {
        e.preventDefault();

        console.log(formdata)


        try {
            const response = await fetch("http://localhost:8080/api/employee", {

                method: "post",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(formdata)
            });

            const data = await response.json();
            console.log("Employee created: ", data);
            navigate("/")
        }
        catch (error) {

            console.log(error.message);

        }

    }




    return (

        <>
            <div className="postuser-wrapper">
                <div className="container">





                    <form onSubmit={handlesubmit} >
                        <div className="header-wrap">

                            <h2 className="header-1">Post New Employee</h2>

                        </div>

                        <input type="text" value={formdata.name} name="name" placeholder="Enter Name" onChange={handleChange} />
                        <input type="email" value={formdata.email} name="email" placeholder="Enter Email" onChange={handleChange} />
                        <input type="text" value={formdata.department} name="department" placeholder="Enter Department" onChange={handleChange} />

                        <button className="btn" type="submit">Post Employee</button>
                    </form>
                </div>

            </div>

        </>
    )
}

export default PostUser