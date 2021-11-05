import React, { useState } from 'react';

const Contact = () => {
  const [data,setData]=useState({
    fullName:'',
    phoneNumber:'',
    email:''
  });
 const InputEvent=(event)=>{
const{name,value}=event.target;

setData((preValue)=>{
    return{
        ...preValue,
        [name]:value
    }
})
 }
 const submit=(e)=>{
e.preventDefault();
 };
  return (
    <>
      <div className="my-5">
        <h1 className='text-center'>contact</h1>
      </div>
      <div className="container">
        <div className='row'>
          <div className="col-md-6 col-10 mx-auto">

            <form onSubmit={submit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" onChange={InputEvent} name="fullName" value={data.fullName} placeholder="Enter Your Name" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" onChange={InputEvent} name="phoneNumber" value={data.phoneNumber} placeholder="mobile number" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" onChange={InputEvent} name="email" value={data.email} placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>

            </form>
          </div>

        </div>

      </div>

    </>
  );

};

export default Contact;
