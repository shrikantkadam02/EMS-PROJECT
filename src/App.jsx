import { useState} from "react";
import "./App.css"
import Header from "./pages/header/Header";
import PostUser from "./pages/Employee/postuser";

import {Routes,Route} from "react-router-dom"
import Dashboard from "./pages/dashbord/Dashboard";
import NoMatch from "./pages/nomatch/NoMatch";
import UpdateUser from "./pages/Employee/UpdateUser";



function App () {



  return(

  <div>

          <Header></Header>
         
         <Routes>
           <Route path="/" element = {<Dashboard></Dashboard>}></Route>
           <Route path="*" element= {<NoMatch></NoMatch>}></Route>
           <Route path="/employee"  element= {<PostUser></PostUser>}></Route>
           <Route path="/employee/:id"  element= {<UpdateUser></UpdateUser>}></Route>

         </Routes>
</div>


       

    
  )
}

export default App;