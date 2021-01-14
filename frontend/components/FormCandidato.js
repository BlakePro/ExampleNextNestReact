import React, { Component } from 'react';
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const formInput = [
  {label: 'Nombre Completo', name: 'NombreCompleto', message: 'Looks good', type: 'text'},
  {label: 'Email', name: 'Email', message: 'Looks good',  type: 'text'},
  {label: 'Teléfono', name: 'Telefono', message: 'Looks good',  type: 'text'},
  {label: 'Escuela', name: 'Escuela', message: 'Looks good',  type: 'text'},
  {label: 'Cursos', name: 'Cursos', message: 'Looks good',  type: 'text'}
];

const submitForm = (formData, router) => {
  alert(JSON.stringify(formData));
}

export default function FormCandidato(props){

  const router = useRouter();

  const { register, handleSubmit } = useForm();

  const onSubmit = formData => submitForm(formData, router)

  return (
    <div>
      <form id="candidato" className="needs-validation" onSubmit={handleSubmit(onSubmit)} autoComplete='off' noValidate>
        <MDBRow>
        {formInput.map((data) => (
            <MDBCol md="12" className="mb-3">
              <label htmlFor={data.name} className="grey-text">
                {data.label}
              </label>
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
              <div className="valid-feedback">{data.message}</div>
            </MDBCol>
          ))}
          <MDBCol md="12" className="mb-3">
            <MDBBtn className="btn-block" size="lg" color="light-green" type="submit">
              Save
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
