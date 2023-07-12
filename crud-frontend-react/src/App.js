import { BrowserRouter, Routes,Route } from "react-router-dom";
import Navbar from "./Components/Header";
import Home from "./Pages/Home";
import AddEmp from "./Pages/AddEmp";
import ListEmp from "./Pages/ListEmp";
import Nopage from "./Pages/Nopage";
import Employee from "./Pages/Employee";
import { EmployeeEdit } from "./Pages/EmployeeEdit";
import ListEmpJava from "./Pages/ListEmpJava";
import ListEmpNode from "./Pages/ListEmpNode";


function App() {
  return (
    <>
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index path="Home" element={<Home/>} />
          <Route path="AddEmp" element={<AddEmp/>} />
          <Route path="ListEmp" element={<ListEmp />} />
          <Route path="listempjava" element={<ListEmpJava />} />
          <Route path="listempnode" element={<ListEmpNode />} />
          <Route path="emp/:id" element={<Employee />} />
          <Route path="empedit/:id" element={<EmployeeEdit/>}/>
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}
export default App;