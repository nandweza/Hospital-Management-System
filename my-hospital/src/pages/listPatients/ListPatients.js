//import axios from "axios";
//import React, { useEffect, useState } from "react";
//import { EditPro } from "./editProduct";
import "./listPatients.css";

export default function ListPatients(/*props*/) {

    // const [product, setProduct] = useState([]);
    // const url = 'http://localhost:4000/api/product/';

    // const getData = () => {
    //     const mydata = axios.get(url)
    //     mydata.then(response => { setProduct(response.data); })
    //         .catch(error => { console.log(error); setProduct ([]) })
    // }
    // const viewItem = (id) => {
    //     props.history.push({
    //         pathname: '/ProductDetails/' + id
    //     })
    // }
    // const editItem = (id) => {
    //     props.history.push({
    //         pathname: '/editProduct/' + id
    //     })
    // }
    // const tabRow = product.map((product, i) => {
    //     return (
    //         <tr key={i}>
    //             <td>{product.sn}</td>
    //             <td>{product.item}</td>
    //             <td>{product.quantity}</td>
    //             <td>{product.unit}</td>
    //             <td>
    //                 <button className="btn btn-warning" onClick={() => { viewItem(product.sn) }}>View Item</button>
    //                 <button className="btn btn-info" onClick={() => { editItem(product.sn) }}>Edit Item</button>
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
                    {/* {tabRow} */}
                </tbody>
            </table>
        </div>
    );
};