import "./home.css";
import { Link } from "react-router-dom";
import {
  Person,
  AirlineSeatIndividualSuite,
  LocalHospital,
  LocalPharmacy,
  Star,
  Timeline,
  DateRange,
  MonetizationOn,
} from "@material-ui/icons";

export default function Home() {
  const currentDate = new Date();
  const today = new Date();

  const date = `${currentDate.getDate()}.${currentDate.getMonth()+1}.${currentDate.getFullYear()}`;
  const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

  return (
    <div className="home">
      <div className="container">
        <div className="wrapper">
          <div className="row1">
            <div className="upper reports">
              <Timeline className="icon" />
              <h3>Analysis<br/>& Report</h3>
            </div>
            <div className="upper invetory">
              <MonetizationOn className="icon" />
              <h3>$10,000</h3>
              <h3>Invetory</h3>
            </div>
            <div className="upper dates">
              < DateRange className="icon" />
              <h2>{time}</h2>
              <p>{date}</p>
            </div>
          </div>
          <div className="row2">
            <div className="person">
              <LocalHospital className="icon" />
              <h4>3</h4>
              <h3>Medical Staffs</h3>
            </div>
            <div className="person">
              <Person className="icon" />
              <h4>5</h4>
              <h3>Non-Medical Staffs</h3>
            </div>
            <Link to="/ListPatients" style={{textDecoration: 'none'}}>
            <div className="person">
              <AirlineSeatIndividualSuite className="icon" />
              <h4>10</h4>
              <h3>Patients</h3>
            </div>
            </Link>
          </div>
          <div className="row3">
            <div className="lower">
              <LocalPharmacy className="icon" />
              <h3>Store<br/>Details</h3>
            </div>
            <div className="lower">
              <LocalPharmacy className="icon" />
              <h3>Pharmacy</h3>
            </div>
            <div className="lower access">
              <div className="access-header">
                <Star className="icon" />
                <h3>Quick Access</h3>
              </div>
              <ul>
                <Link to="/AddPatients" style={{textDecoration: 'none'}}>
                <li>Register a new Patient</li>
                </Link>
                <li>Laboratory Test Results</li>
                <li>Appointments</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}