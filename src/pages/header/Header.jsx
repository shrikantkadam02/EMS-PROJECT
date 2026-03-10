import "./Header.css"

const Header = () => {


    return (


        <>
            <nav>

                <div className="logo">

                    <h2>Employee Managment System</h2>

                </div>
                
                <ul>
                    <li><a href="/">Employee</a></li>
                    <li><a href="/employee">Post Employee</a></li>
                </ul>


            </nav>


        </>
    )
}


export default Header;