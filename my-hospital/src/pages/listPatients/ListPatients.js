import axios from "axios";
import React, { useEffect, useState } from "react";
//import { EditPatient } from "./editProduct";
import "./listPatients.css";

export default function ListPatients(props) {

    // const [patients, setPatients] = useState([]);
    // const url = 'http://localhost:3001/api/patient/';

    // const getData = () => {
    //     const mydata = axios.get(url)
    //     mydata.then(response => { setPatients(response.data); })
    //         .catch(error => { console.log(error); setPatients ([]) })
    // }
    // const viewPatient = (id) => {
    //     props.history.push({
    //         pathname: '/PatientDetails/' + id
    //     })
    // }
    // const updatePatient = (id) => {
    //     props.history.push({
    //         pathname: '/editPatient/' + id
    //     })
    // }
    // const tabRow = patients.map((patient, i) => {
    //     return (
    //         <tr key={i}>
    //             <td>{patient.sn}</td>
    //             <td>{patient.date}</td>
    //             <td>{patient.name}</td>
    //             <td>{patient.sex}</td>
    //             <td>{patient.dob}</td>
    //             <td>{patient.bloodgp}</td>
    //             <td>{patient.disease}</td>
    //             <td>{patient.phone}</td>
    //             <td>{patient.email}</td>
    //             <td>
    //                 <button className="btn btn-warning" onClick={() => { viewPatient(patient.sn) }}>View Patient</button>
    //                 <button className="btn btn-info" onClick={() => { updatePatient(patient.sn) }}>Update Patient</button>
    //             </td>
    //         </tr>
    //     );
    // })

    // useEffect(() => {
    //     getData();
    // }, []);

    return (
        <div className="ListPatients">
            <h1>List of Patients</h1>
            <table className="table table-bordered table-striped w-auto">
                <thead>
                    <tr>
                        <th>S/N</th><th>Date</th><th>Patient's Names</th><th>Sex</th><th>D.O.B</th><th>B.G</th><th>Diseases</th><th>Phone</th><th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {{tabRow}} */}
                </tbody>
            </table>
        </div>
    );
};