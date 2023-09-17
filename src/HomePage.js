import { Card ,Row,Col, Container, CardHeader, CardBody, CardFooter, Input, InputGroup, InputGroupText} from "reactstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useEffect } from "react";
import { useState } from "react";
import { Button ,Badge} from "reactstrap";
import HomeImage from "./HomeImage.gif"
import { Image } from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {BsFillChatLeftTextFill } from "react-icons/bs";
import {BsInfoCircle} from "react-icons/bs";
import {BsFillCheckCircleFill} from "react-icons/bs";
import {BsSend } from "react-icons/bs";
import {useRef} from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Contact from "./pages/Contact";
import { Alert } from "react-bootstrap";
import {Popover,PopoverItem} from "reactstrap";
import Register from "./pages/Register";







const HomePage=()=>{

  useEffect(()=>{
    document.title="Home || Legal Advisor ";
  })


  const [open1, setOpen1] = useState(false);//for chat open


  const ref = useRef(null);
  const handlescroll = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  const ref1 = useRef(null);
  const handlescroll1 = () => {
    ref1.current?.scrollIntoView({behavior: 'smooth'});
      };

    return (
      <div>

        <Container style={{marginTop:'.5cm'}}>


        <Card color='dark' style={{paddingTop:'.5cm',paddingBottom:'.5cm'}} inverse>
            <Row>
                <Col md={12}>
                  <div style={{width:'100%'}}>
                  <marquee >
                    <h3>WELCOME TO LEGAL ADVISOR  KNOW YOUR RIGHTS </h3>
                  </marquee>
                  </div>
                </Col>  
            </Row>







      </Card>
      <Row>
        <Col md={12} className="text-end">
        <BsInfoCircle  onClick={handlescroll1}/>
        </Col>
      </Row>
      <Row style={{marginTop:'2cm'}}>
        <Col md={5} className="text-center">
        <div style={{paddingTop:'4cm',paddingBottom:'1cm'}}>
  <Button
    color="primary" onClick={handlescroll} outline size="lg" style={{paddingTop:'.5cm',paddingBottom:'.5cm'}}>GetStarted{' '}
  <BsFillArrowRightCircleFill />
  </Button>
</div>
        </Col>
        <Col md={7}>
      <Card color="dark" outline>
        
        <CardBody>
        <h1>WELCOME TO LEGAL ADVISOR</h1>
            <br></br><br></br>
            <i><p>Anyone and everyone who is on Indian soil, including corporations and foreigners as well as citizens of India, is subject to this law. A legal right is “that power which the man has, to make a person or persons to do or restrains from doing a certain act or acts so far as the power arises from society imposing a legal duty upon the person or persons.</p></i>
        </CardBody>
        <CardFooter className="text-center">
            <br></br>
            
            <Register/>
            
        </CardFooter>
      </Card>
        </Col>
      </Row>







      <div>
<div style={{height: '10rem'}} />  {/*can use for more */}
<div ref={ref}></div>
      <Row>
        <Col md={7}>
                          <Card color="dark" inverse>
                            <CardHeader><h1>Ask Anythink</h1></CardHeader>
                          <CardBody>
                            <InputGroup size="lg">
                            <InputGroupText>
                            <BsFillChatLeftTextFill />
                            </InputGroupText>
                            <Input type="text" placeholder="Ex-How Can i File a Complain ?" style={{borderRight:'none',height:'2cm'}}></Input>
                            <InputGroupText>

                            <BsSend onClick={() => setOpen1(!open1)}
        aria-controls="example-collapse-text"
        aria-expanded={open1} />
                            </InputGroupText>
                            </InputGroup>

        <Collapse in={open1}>
        <div id="example-collapse-text">
        <br></br>
          The consumer may argue his case on his own or through his authorized representative. The complaint made with district forum or state commission needs to be filed in three sets and when made with national commission needs to be filed in four sets with additional sets for each opposite party.
          <br></br>....
          <br></br>....
          <br></br>....
          <br></br>....
          <br></br>....
          <br></br>....
        </div>
      </Collapse>
                          </CardBody>
                          </Card>
        </Col>
        <Col md={5}></Col>

      </Row>
<div style={{height: '16rem'}} />
      <div>
      <Alert variant="dark" className="row-gy-4">
        <Row>
          <Col md={4}>

        <Card color="dark" inverse>
          <CardHeader><h2><BsFillCheckCircleFill/></h2></CardHeader>
          <CardBody>Fondata il 3 ottobre 1909 da Emilio Arnstein, cadde in fallimento nel 1993 e si ricostituì a livello societario con l'attuale denominazione dopo aver acquisito nuovamente i diritti e il titolo sportivo del sodalizio precedente. I colori sociali sono il rosso e il blu e la maglia di gioco è a pali verticali alternati della medesima cromia.
         </CardBody>
        </Card>
          </Col>

          <Col md={4}>

        <Card color="dark" inverse>
          <CardHeader><h2><BsFillCheckCircleFill/></h2></CardHeader>
          <CardBody>Fondata il 3 ottobre 1909 da Emilio Arnstein, cadde in fallimento nel 1993 e si ricostituì a livello societario con l'attuale denominazione dopo aver acquisito nuovamente i diritti e il titolo sportivo del sodalizio precedente. I colori sociali sono il rosso e il blu e la maglia di gioco è a pali verticali alternati della medesima cromia.
         </CardBody>
        </Card>
          </Col>

          <Col md={4}>


        <Card color="dark" inverse>
          <CardHeader><h2><BsFillCheckCircleFill/></h2></CardHeader>
          <CardBody>Fondata il 3 ottobre 1909 da Emilio Arnstein, cadde in fallimento nel 1993 e si ricostituì a livello societario con l'attuale denominazione dopo aver acquisito nuovamente i diritti e il titolo sportivo del sodalizio precedente. I colori sociali sono il rosso e il blu e la maglia di gioco è a pali verticali alternati della medesima cromia.
         </CardBody>
        </Card>
          </Col>

          
          
        </Row>
      </Alert>
      </div>
</div>
      </Container>
     <div>
     <div style={{height: '5rem'}} />  {/*can use for more */}
<div ref={ref1}><Contact/></div>

     </div>
        </div>
    );
}
export default HomePage;