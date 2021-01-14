import Configuration from '../config.json';
import React, { Component } from 'react';
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const formInput = [
  {label: 'Name', name: 'NameProduct', message: 'Looks good', type: 'text'},
  {label: 'Category', name: 'Category', message: 'Looks good',  type: 'text'},
  {label: 'Description', name: 'Description', message: 'Looks good',  type: 'text'},
  {label: 'Quantity', name: 'ProductQuantity', message: 'Looks good',  type: 'number'}
];

const submitForm = (formData, router) => {

  let sendData = {};
  let error = 0;
  for(let name in formData){
    let value = formData[name];
    if(['Category', 'Description', 'IdProduct', 'NameProduct', 'ProductQuantity', 'Status'].indexOf(name) > -1){
      if(typeof formData[name] === 'undefined')++error;
      else{
        let value = formData[name];
        if(value == '')++error;
        else{
          sendData[name] = value;
        }
      }
    }
  }

  if(formData.typeForm == 'insert')--error;

  if(error > 0)toast.error(error + 'Error', {closeButton: true});
  else{
    sendData['Status'] = 1;
    event.target.className += " was-validated";
    let method = 'POST';
    let url = Configuration.ProductEndpoint;
    if(formData.typeForm == 'update'){
      url = url + formData.IdProduct;
      method = 'PUT';
    }

    fetch(url, {
      method: method,
      body: JSON.stringify(sendData),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      let message = res.message;
      let status = res.status;
      if(status == 200){
        toast.success(message, {closeButton: true});
        console.log(router);
        router.push('/');
      }
      else toast.error(JSON.stringify(message), {closeButton: true});
    })
  }
}

export default function FormCrud(props){

  const router = useRouter();

  const { register, handleSubmit } = useForm();

  const onSubmit = formData => submitForm(formData, router)

  return (
    <div>
      <form className="needs-validation" onSubmit={handleSubmit(onSubmit)} autoComplete='off' noValidate>
        <MDBRow>
        <input ref={register} defaultValue={props._id} name="IdProduct" type="hidden"/>
        <input ref={register} defaultValue={props.typeForm} name="typeForm" type="hidden"/>
          {formInput.map((data) => (
            <MDBCol md="12" className="mb-3">
              <label htmlFor={data.name} className="grey-text">
                {data.label}
              </label>

              {(data.name == 'Category' ?
                 (
                   <select ref={register} defaultValue={props[data.name]} name={data.name} type={data.type} id={data.name} className="form-control" placeholder={data.label} required>
                    <option value="Bebidas">Bebidas</option>
                    <option value="Limpieza">Limpieza</option>
                    <option value="Botanas">Botanas</option>
                    <option value="Cremeria">Cremeria</option>
                  </select>
                 )
                 : (
                  <input
                    ref={register}
                    defaultValue={props[data.name]}
                    name={data.name}
                    type={data.type}
                    id={data.name}
                    className="form-control"
                    placeholder={data.label}
                    required
                  />
                )
              )}
              <div className="valid-feedback">{data.message}</div>
            </MDBCol>
          ))}
          <MDBCol md="12" className="mb-3">
            <MDBBtn className="btn-block" size="lg" color="light-green" type="submit">
              {props.nameButton}
            </MDBBtn>
        </MDBCol>
        </MDBRow>
        <ToastContainer
         hideProgressBar={false}
         newestOnTop={true}
         autoClose={2000}
       />
      </form>
    </div>
  );
}
