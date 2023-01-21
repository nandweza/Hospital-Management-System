import "./sidebar.css";
import {
  LineStyle,
  Person,
  Menu,
  AirlineSeatIndividualSuite,
  LocalHospital,
  LocalPharmacy,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Doctors</h3>
          <ul className="sidebarList">
            <Link to="/AddDoctors" className="link">
            <li className="sidebarListItem">
              <LocalHospital className="sidebarIcon" />
              Add Doctor
            </li>
            </Link>
            <Link to="/ListDoctors" className="link">
            <li className="sidebarListItem">
              <Menu className="sidebarIcon" />
              All Doctors
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Other Staffs</h3>
          <ul className="sidebarList">
            <Link to="/AddStaff" className="link">
            <li className="sidebarListItem">
              <Person className="sidebarIcon" />
              Add Staff
            </li>
            </Link>
            <Link to="/ListStaffs" className="link">
            <li className="sidebarListItem">
              <Menu className="sidebarIcon" />
              All Staffs
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Patients</h3>
          <ul className="sidebarList">
            <Link to="/AddPatients" className="link">
            <li className="sidebarListItem">
              <AirlineSeatIndividualSuite className="sidebarIcon" />
              Add Patients
            </li>
            </Link>
            <Link to="ListPatients" className="link">
            <li className="sidebarListItem">
              <Menu className="sidebarIcon" />
              All Patients
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Medical Equipments</h3>
          <ul className="sidebarList">
            <Link to="/AddEquipments" className="link">
            <li className="sidebarListItem">
              <LocalPharmacy className="sidebarIcon" />
              Add Equipments
            </li>
            </Link>
            <Link to="/ListEquipments">
            <li className="sidebarListItem">
              <Menu className="sidebarIcon" />
              All Equipments
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}