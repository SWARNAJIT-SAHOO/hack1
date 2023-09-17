import { Button, OverlayTrigger,Popover } from "react-bootstrap";
import { Input,Form,Row,Col,FormGroup,Label } from "reactstrap";
import { useState } from "react";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";


const Register=()=>{

    const [id,setId]=useState('');
    const [name,setname]=useState("");
    const [email,setEmail]=useState("");
    const [phonenumber,setPhonenumber]=useState("");
    // const[data2,setData2]=useState([]);
    const handle=(event)=>{
        console.log(event);
        save(event);
        event.preventDefault();
    }
    async function save(event){
        try{
            await axios.post(`localhost:8080/user/register`,
            {
                name:name,
                email:email,                       //left one-->database column right one-->values in input
                phonenumber:phonenumber,
            });
            toast.info("Done",{position:'top-left',theme:'colored',autoClose: 3000,});
            // setData2([firstname,lastname,email,comapany,phonenumber]);  //for user dashboard
            setId("");
                    setname("");
                    setEmail("");
                    setPhonenumber("");
        }
        catch(err){     
            // console.log(err);
                    toast.error('Failed',{position:'top-left',theme:'colored'});
                          
        }
    }
    







    const popover = (
        <Popover>
          <Form  onSubmit={handle}>
          <Popover.Header as="h3"><h2>Register Now</h2></Popover.Header>
          <Popover.Body>
               
                <Row>
                    <Col md="12">
                    <FormGroup>
        <Label for="name">Name</Label>
        <Input id="name" name="fn" value={name}
        onChange={(event)=>
    {
        setname(event.target.value)
    }}
        placeholder="Enter Your Name" type="text" required/>
                    </FormGroup>
                    </Col>
                </Row>


                <Row>
                <Col md="12">
                <Label for="email">Email : </Label>
        <Input id="email" name="ln" value={email}
        onChange={(event)=>
            {
                setEmail(event.target.value)
            }}
        placeholder="Enter Your Email" type="email" required />
                </Col>
                </Row>
                <br></br>
             <Row>
                <Col md="12">
                <Label for="ph_num">Phone Number : </Label>
        <Input id="ph_num" name="PhoneNumber" value={phonenumber}
        onChange={(event)=>
            {
                setPhonenumber(event.target.value)
            }}
        placeholder="Enter Your Phone Number" type="text"  required />
                </Col>
                </Row>

                <Col>
                <FormGroup check>
                    <Input id="exampleCheck" name="check" type="checkbox" required />
                     <Label check for="exampleCheck">Term & Condition</Label>
                     </FormGroup>
                     </Col>
                     <br></br>
                     <div className="text-center">
                        
                     <Button  variant="success" type="submit" >SUBMIT</Button>
                        </div>         
              

          </Popover.Body>
            </Form>
        </Popover>
      );




    return (
        <>
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover} >
        <Button  size="lg" variant="outline-success">Register</Button>
        </OverlayTrigger>
        <ToastContainer/>
        </>
    );
}
export default Register