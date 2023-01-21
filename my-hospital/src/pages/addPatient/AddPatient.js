//import React, { useState } from 'react'
//import axios from "axios";
import "./addPatient.css";

export default function AddPatient(/*props*/) {
//   const [product, setProduct] = useState(
//     {
//       sn:"", item:"", quantity:"", unit:"", unitprice:"", costprice:"", sellingprice:"", profit:"", date:""
//     }
//   );

//   const inputHandler = (e) => {
//     setProduct((product) => (
//       {
//         ...product,
//         [e.target.item]:e.target.value
//       }
//     ))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post("http://127.0.0.1:4000/api/product", product)
//     .then(res=>props.history.push('/listProducts'))
//     .catch(error=>console.log(error))
//   }

  return (
    <div className="AddPatient">
      <h1>Register Patient</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-3">
            <form className="form" /*onSubmit={handleSubmit}*/>
              <label>S/N</label>
              <input type='number' name='no' id='no'
               className='form-control' /*onChange={inputHandler}*//>
               <br/>
              <label>Date</label>
              <input type='date' name='date' id='date'
              className='form-control' /*onChange={inputHandler}*//>
              <label>Patient's Names</label>
              <input type='text' name='name' id='name' placeholder="eg Jon Doe"
              className='form-control' /*onChange={inputHandler}*//>
              <label>Sex</label>
              <input type='text' name='sex' id='sex'
              className='form-control' /*onChange={inputHandler}*//>
              <label>D.O.B</label>
              <input type='date' name='date' id='date'
              className='form-control' /*onChange={inputHandler}*//>
              <label>Blood Group</label>
              <input type='text' name='bloodgp' id='bloodgp'
              className='form-control' /*onChange={inputHandler}*//>
              <label>Medical history</label>
              <input type='text' name='medical-h' id='medical-h'
              className='form-control' /*onChange={inputHandler}*//>
              <label>Symptoms & Signs</label>
              <input type='text' name='symptoms' id='symptoms'
              className='form-control' /*onChange={inputHandler}*//>
              <label>Diseases</label>
              <input type='text' name='disease' id='disease'
              className='form-control' /*onChange={inputHandler}*//>
              <label>Diognosis</label>
              <input type='text' name='diagnosis' id='diagnosis'
              className='form-control' /*onChange={inputHandler}*//>
              <label>Prescribed medication</label>
              <input type='text' name='p-medication' id='p-medication'
              className='form-control' /*onChange={inputHandler}*//>
              <label>Lab test results</label>
              <input type='text' name='lab-test' id='lab-test'
              className='form-control' /*onChange={inputHandler}*//>
              <label>Phone</label>
              <input type='tel' name='phone' id='phone'
              className='form-control' /*onChange={inputHandler}*//>
              <label>Email</label>
              <input type='text' name='email' id='email'
              className='form-control' /*onChange={inputHandler}*//>
              <label>Admitted on</label>
              <input type='date' name='a-date' id='a-date'
              className='form-control' /*onChange={inputHandler}*//>
              <label>Discharged on</label>
              <input type='date' name='d-date' id='d-date'
              className='form-control' /*onChange={inputHandler}*//>

              <button className="btn btn-primary" type="submit">Add Patient</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};