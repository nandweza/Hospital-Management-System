import React, { useState } from 'react'
import axios from "axios";
import "./addPatient.css";

export default function AddPatient(props) {
  const [patient, setPatient] = useState(
    {
      sn:"", date:"", name:"", sex:"", dob:"", bloodgp:"",medicalh:"", symptoms:"", disease:"", diagnosis:"", pmedication:"", labtest:"", phone:"", email:""
    }
  );

  const inputHandler = (e) => {
    setPatient((patient) => (
      {
        ...patient,
        [e.target.name]:e.target.value
      }
    ))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:3001/api/patient/", patient)
    .then(res=>props.history.push('/ListPatients'))
    .catch(error=>console.log("Error occured", error))
  }

  return (
    <div className="AddPatient">
      <h1>Register Patient</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-3">
            <form className="form" onSubmit={handleSubmit}>
              <label>S/N</label>
              <input type='number' name='sn' id='sn'
               value={patient.sn||''}
               className='form-control' onChange={inputHandler}/>
               <br/>
              <label>Date</label>
              <input type='date' name='date' id='date'
               value={patient.date||''}
               className='form-control' onChange={inputHandler}/>
              <label>Patient's Names</label>
              <input type='text' name='name' id='name' placeholder="eg Jon Doe"
               value={patient.name||''}
               className='form-control' onChange={inputHandler}/>
              <label>Sex</label>
              <input type='text' name='sex' id='sex'
               value={patient.sex||''}
               className='form-control' onChange={inputHandler}/>
              <label>D.O.B</label>
              <input type='date' name='dob' id='dob'
               value={patient.dob||''}
               className='form-control' onChange={inputHandler}/>
              <label>Blood Group</label>
              <input type='text' name='bloodgp' id='bloodgp'
               value={patient.bloodgp||''}
               className='form-control' onChange={inputHandler}/>
              <label>Medical history</label>
              <input type='text' name='medicalh' id='medicalh'
               value={patient.medicalh||''}
               className='form-control' onChange={inputHandler}/>
              <label>Symptoms & Signs</label>
              <input type='text' name='symptoms' id='symptoms'
               value={patient.symptoms||''}
               className='form-control' onChange={inputHandler}/>
              <label>Diseases</label>
              <input type='text' name='disease' id='disease'
               value={patient.disease||''}
               className='form-control' onChange={inputHandler}/>
              <label>Diognosis</label>
              <input type='text' name='diagnosis' id='diagnosis'
               value={patient.diagnosis||''}
               className='form-control' onChange={inputHandler}/>
              <label>Prescribed medication</label>
              <input type='text' name='pmedication' id='pmedication'
               value={patient.pmedication||''}
               className='form-control' onChange={inputHandler}/>
              <label>Lab test results</label>
              <input type='text' name='labtest' id='labtest'
               value={patient.labtest||''}
               className='form-control' onChange={inputHandler}/>
              <label>Phone</label>
              <input type='tel' name='phone' id='phone'
               value={patient.phone||''}
               className='form-control' onChange={inputHandler}/>
              <label>Email</label>
              <input type='text' name='email' id='email'
               value={patient.email||''}
               className='form-control' onChange={inputHandler}/>
              <label>Admitted on</label>
              <input type='date' name='admitted' id='admitted'
               value={patient.admitted||''}
               className='form-control' onChange={inputHandler}/>
              <label>Discharged on</label>
              <input type='date' name='discharged' id='discharged'
               value={patient.discharged||''}
               className='form-control' onChange={inputHandler}/>

              <button className="btn btn-primary" type="submit">Add Patient</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};