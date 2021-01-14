import React, { Component, useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { MDBRow, MDBCol, MDBTable, MDBBtn, MDBTableBody, MDBTableHead , MDBDataTable, MDBContainer} from 'mdbreact';
import Slider from '../components/Slider';
import Delete from '../components/Delete';

export default function TableCrud(props){

  const router = useRouter();

  const parseProducts = (products) => {
    let rows = [];
    for(let key in products){
      let product = products[key];
      let no = parseInt(key) + 1;
      product['no'] = no;
      product['edit'] =  <Slider title={'Edit '+ no} nameButton="Update" colorButton="indigo" typeForm="update" {...product}/>
      product['delete'] = <Delete {...product}/>
      rows.push(product);
    }
    return {
      columns: [
        { label: 'No', field: 'no', sort: 'asc', width: 100},
        { label: 'Product', field: 'NameProduct'},
        { label: 'Category', field: 'Category'},
        { label: 'Description', field: 'Description'},
        { label: 'Quantity', field: 'ProductQuantity', width: 100},
        { label: 'Date', field: 'TimeStamp', width: 100},
        { label: '', field: 'edit', width: 20},
        { label: '', field: 'delete', width: 20},
      ],
      rows: rows
    };
  }

  return (
    <div>
      <MDBRow>
        <MDBCol xs="12" md="8">
        </MDBCol>
        <MDBCol xs="12" md="4" className="mt-3">
          <Slider title="New Product" nameButton="Add new" colorButton="secondary" typeForm="insert"/>
        </MDBCol>
        <MDBCol md="12" className="mt-3">
          <MDBDataTable data={parseProducts(props.products)} striped responsive hover/>
        </MDBCol>
      </MDBRow>
    </div>
  );

}
