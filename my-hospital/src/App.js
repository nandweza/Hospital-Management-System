import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import AddDoctor from "./pages/addDoctor/AddDoctor";
import AddPatient from "./pages/addPatient/AddPatient";
import ListPatients from "./pages/listPatients/ListPatients";
import AddEquipment from "./pages/addEquipments/AddEquipments";
import ListEquipments from "./pages/listEquipments/ListEquipments";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/AddDoctors" element={<AddDoctor/>} />
          <Route exact path="/AddPatients" element={<AddPatient/>} />
          <Route exact path="/ListPatients" element={<ListPatients/>} />
          <Route exact path="/AddEquipments" element={<AddEquipment/>} />
          <Route exact path="/ListEquipments" element={<ListEquipments/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;