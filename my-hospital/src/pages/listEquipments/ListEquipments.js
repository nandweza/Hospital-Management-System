// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { EditProduct } from "./editProduct";
import "./listEquipments.css";

export default function ListEquipments(/*props*/) {

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
        <div className="ListEquipments">
            <h1>Medical Equipments</h1>
            <table className="table table-bordered table-striped w-auto">
                <thead>
                    <tr>
                        <th>S/N</th><th>Item</th><th>Quantity</th><th>Description</th><th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {/*tabRow*/}
                </tbody>
            </table>
        </div>
    );
};