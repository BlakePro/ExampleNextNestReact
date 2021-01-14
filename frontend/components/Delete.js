import Configuration from '../config.json';
import React, { Component } from 'react';
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";
import { MDBBtn } from "mdbreact";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const submitForm = (formData, router) => {

  let method = 'DELETE';
  let url = Configuration.ProductEndpoint + formData.IdProduct;
  console.log(url);
  fetch(url, {
    method: method,
    headers: {'Content-Type': 'application/json'}
  })
  .then(res => res.json())
  .then(res => {
    console.log(res);
    let message = res.message;
    let status = res.status;
    if(status == 200){
      toast.success(message);
      router.push('/');
    }else toast.error(JSON.stringify(message));
  })

}

export default function Delete(props){

  const router = useRouter();

  const { register, handleSubmit } = useForm();

  const onSubmit = formData => submitForm(formData, router)

  return (
    <div>
      <form className="needs-validation" onSubmit={handleSubmit(onSubmit)} autoComplete='off' noValidate>
        <input ref={register} defaultValue={props._id} name="IdProduct" type="hidden"/>
        <input ref={register} defaultValue="delete" name="typeForm" type="hidden"/>
        <MDBBtn className="btn-block" size="lg" color="danger" type="submit">
          Delete
        </MDBBtn>
      </form>
      <ToastContainer
       hideProgressBar={false}
       newestOnTop={true}
       autoClose={2000}
      />
    </div>
  );
}
